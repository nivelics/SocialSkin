import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreHomeComponent } from './pre-home/pre-home.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PrivacyPolicyComponent } from './static-pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './static-pages/terms-conditions/terms-conditions.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FinalistProjectComponent } from './finalist-project/finalist-project.component';

// Detalle finalistas
import { ComproagroComponent } from './colombia/finalistas/comproagro/comproagro.component';
import { SoyJulietaComponent } from './colombia/finalistas/soy-julieta/soy-julieta.component';
import { WayuudaComponent } from './colombia/finalistas/wayuuda/wayuuda.component';
import { PotabilizacionComponent } from './colombia/finalistas/potabilizacion/potabilizacion.component';
import { CapioComponent } from './colombia/finalistas/capio/capio.component';
import { DoggyComponent } from './colombia/finalistas/doggy/doggy.component';
import { LaFontaineComponent } from './colombia/finalistas/la-fontaine/la-fontaine.component';
import { FenixComponent } from './colombia/finalistas/fenix/fenix.component';
import { EducycleComponent } from './colombia/finalistas/educycle/educycle.component';
import { ReformatecComponent } from './colombia/finalistas/reformatec/reformatec.component';
import { TierraGrataComponent } from './colombia/finalistas/tierra-grata/tierra-grata.component';
import { IwaComponent } from './colombia/finalistas/iwa/iwa.component';
import { NibiComponent } from './colombia/finalistas/nibi/nibi.component';
import { WaterComponent } from './colombia/finalistas/water/water.component';
import { TruequerosComponent } from './colombia/finalistas/truequeros/truequeros.component';
import { BiotorComponent } from './colombia/finalistas/biotor/biotor.component';
import { ReduvaComponent } from './colombia/finalistas/reduva/reduva.component';
import { AspersoresComponent } from './colombia/finalistas/aspersores/aspersores.component';
import { OrganicumComponent } from './colombia/finalistas/organicum/organicum.component';
import { MangoComponent } from './colombia/finalistas/mango/mango.component';
import { HomeServiceComponent } from './colombia/finalistas/home-service/home-service.component';

const routes: Routes = [
    {
        path: '',
        data: { breadcrumd: 'Inicio' },
        children: [
            {
                path: '',
                component: PreHomeComponent
            },
            {
                path: ':slug/que-es',
                component: AboutComponent
            },
            {
                path: ':slug/faq',
                component: FaqComponent
            },
            {
                path: ':home',
                children: [
                    {
                        path: '',
                        component: HomeComponent
                    },
                    {
                        path: 'finalistas',
                        children: [
                            {
                                path: '',
                                component: FinalistProjectComponent
                            },
                            {
                                path: 'comproagro',
                                component: ComproagroComponent
                            },
                            {
                                path: 'soy-julieta',
                                component: SoyJulietaComponent
                            },
                            {
                                path: 'wayuuda',
                                component: WayuudaComponent
                            },
                            {
                                path: 'capio',
                                component: CapioComponent
                            },
                            {
                                path: 'estacion-de-potabilizacion-de-aguas-lluvias',
                                component: PotabilizacionComponent
                            },
                            {
                                path: 'doggy-in-home',
                                component: DoggyComponent
                            },
                            {
                                path: 'colegio-la-fontaine',
                                component: LaFontaineComponent
                            },
                            {
                                path: 'fenix-planet',
                                component: FenixComponent
                            },
                            {
                                path: 'educycle',
                                component: EducycleComponent
                            },
                            {
                                path: 'reformatec',
                                component: ReformatecComponent
                            },
                            {
                                path: 'tierra-grata',
                                component: TierraGrataComponent
                            },
                            {
                                path: 'iwa',
                                component: IwaComponent
                            },
                            {
                                path: 'nibi',
                                component: NibiComponent
                            },
                            {
                                path: 'water-is-life',
                                component: WaterComponent
                            },
                            {
                                path: 'proyecto-truequeros',
                                component: TruequerosComponent
                            },
                            {
                                path: 'biotor',
                                component: BiotorComponent
                            },
                            {
                                path: 'red-universitaria-anticorrupcion',
                                component: ReduvaComponent
                            },
                            {
                                path: 'aspersores-de-paz',
                                component: AspersoresComponent
                            },
                            {
                                path: 'organicum',
                                component: OrganicumComponent
                            },
                            {
                                path: 'mango-juice-company',
                                component: MangoComponent
                            },
                            {
                                path: 'home-service',
                                component: HomeServiceComponent
                            }
                        ]
                    }
                ]
            },
            {
                path: ':slug/categoria',
                component: CategoriesComponent
            }, {
                path: 'terminos-condiciones',
                component: TermsConditionsComponent
            },
            {
                path: 'politica-privacidad',
                component: PrivacyPolicyComponent
            },
            {
                path: ':slug/criterios-evaluacion',
                component: EvaluationComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        }),
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

