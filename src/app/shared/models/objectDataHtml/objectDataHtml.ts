import { TermsConditions } from '../termsConditions/termsConditions';
import { Privacy } from '../privacy/privacy';
import { ContestCurrents } from '../contest_currents/contestCurrents';
import { ContestPrevious } from '../contest_previous/contestPrevious';
import { Categories } from '../categories/categories';
import { Novelties } from '../novelties/novelties';
import { Allies } from '../allies/allies';
import { Banner } from '../banner/banner';
import { Navigation } from '../navigations/navigations';
import { Faq } from '../faq/faq';
import { Activities } from '../../models/activities/activities';
import { Requirements } from '../../models/requirements/requirements';
import { Adwards } from '../../models/adwards/adwards';
import { Judges } from '../../models/judges/judges';

export class ObjectDataHtml {
    withMenu: boolean;
    typeColorHeader: boolean;//sara
    color: string;
    showFinalist: boolean;
    showWinner: boolean;
    navigations: Navigation[] = [];
    banner: Banner = new Banner;
    terms: TermsConditions[] = [];
    privacies: Privacy[] = [];
    contest_currents: ContestCurrents = new ContestCurrents;
    contest_previous: ContestPrevious = new ContestPrevious;
    categories: Categories = new Categories;
    novelties: Novelties = new Novelties;
    allies: Allies = new Allies;
    faqs: Faq[] = [];
    activities: Activities = new Activities;
    requirements: Requirements = new Requirements;
    adwards: Adwards = new Adwards;
    judges: Judges = new Judges;
}