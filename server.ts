
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as sm from 'sitemap';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as request from 'request';
import { join } from 'path';
import 'localstorage-polyfill';

global['localStorage'] = localStorage;

// Express server
export const app = express();

const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');
const compression = require('compression');
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { generate } from 'rxjs';
import { environment } from './src/environments/environment';

var sitemap;
enableProdMode();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function sitemapPortal(object) {
    sitemap = sm.createSitemap({
        hostname: 'https://social-skin.com',
        cacheTime: 600000,
        urls: object
    });
    return sitemap;
}

function generateSitemap() {
    return new Promise((resolve, reject) => {
        var object = [];
        request.get(environment.urlBackend + 'sitemap', (error, response, body) => {
            if (error) {
                return console.dir(error);
            } else {
                var arrayObject = JSON.parse(body);
                if (arrayObject.status === 'ok') {
                    for (let index = 0; index < arrayObject.result.length; index++) {
                        const element = arrayObject.result[index];
                        object.push({ url: element.url, lastmod: element.lastmod, changefreq: element.changefreq, priority: Number(element.priority) });
                    }
                }
                resolve(sitemapPortal(object));
            }
        });
    });
}


app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('/redirect/**', (req, res) => {
    const location = req.url.substring(10);
    res.redirect(301, req.url);
});

//site map of social skin
app.get('/sitemap/sitemap.xml', function (req, res) {
    generateSitemap().then((response) => {
        sitemap = response;
        sitemap.toXML(function (err, xml) {
            if (err) {
                return res.status(500).end();
            }
            res.header('Content-Type', 'application/xml');
            res.send(xml);
        });
    });
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), { index: false }));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req: req, res: res, preboot: false });
    res.setHeader('Content-Type', 'text/html');
});