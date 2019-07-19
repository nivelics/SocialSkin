import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ObjectDataHtml } from '../../../shared/models/objectDataHtml/objectDataHtml';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FaqService {

    private urlBackend = environment.urlBackend;


    constructor(private http: HttpClient) {

    }

    findDataFaqServices(typeHome: String): Observable<ObjectDataHtml> {
        return this.http.get<ObjectDataHtml>(this.urlBackend + typeHome).
            pipe(catchError((error, caught) => {
                return of(error);
            }) as any
            );
    }

}