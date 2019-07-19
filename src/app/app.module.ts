import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { ComponentsMaterial } from './components-material';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { BannerComponent } from './shared/layout/banner/banner.component';
import { SeoService } from './shared/services/seo/seo.service';
import { MicroformatsService } from './shared/services/microformats/microformats.service';
import { GridComponent } from './shared/layout/grid/grid.component';
import { CarouselComponent } from './shared/layout/carousel/carousel.component';
import { NguCarouselModule } from '@ngu/carousel';
import { PreHomeComponent } from './pre-home/pre-home.component';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { PartnersComponent } from './shared/layout/partners/partners.component';
import { AboutComponent } from './about/about.component';
import { BannerService } from './shared/services-modules/banner/banner.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { CategoriesComponent } from './categories/categories.component';
import { IntercalateBlockComponent } from './shared/layout/intercalate-block/intercalate-block.component';
import { ServiceDataEmiterModules } from './shared/services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { FormatDate } from './shared/pipes/formatDate/formatDate.pipe';
import { LateralNavComponent } from './shared/layout/lateral-nav/lateral-nav.component';
import { ListBlockComponent } from './shared/layout/list-block/list-block.component';
import { FinalistProjectComponent } from './finalist-project/finalist-project.component';
import { InteractionsComponent } from './shared/layout/interactions/interactions.component';
import { PaginatorComponent } from './shared/layout/paginator/paginator.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogVideoComponent } from './shared/layout/dialog-video/dialog-video.component';
import { TermsConditionsComponent } from './static-pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './static-pages/privacy-policy/privacy-policy.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HelpComponent } from './help/help.component';
import { ThanksComponent } from './thanks/thanks.component';

// Detalles finalistas
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FaqComponent,
    BannerComponent,
    GridComponent,
    CarouselComponent,
    PreHomeComponent,
    PartnersComponent,
    AboutComponent,
    CategoriesComponent,
    IntercalateBlockComponent,
    FormatDate,
    LateralNavComponent,
    ListBlockComponent,
    FinalistProjectComponent,
    InteractionsComponent,
    PaginatorComponent,
    DialogVideoComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    DetailProjectComponent,
    EvaluationComponent,
    HelpComponent,
    ThanksComponent,
    ComproagroComponent,
    SoyJulietaComponent,
    WayuudaComponent,
    PotabilizacionComponent,
    CapioComponent,
    DoggyComponent,
    LaFontaineComponent,
    FenixComponent,
    EducycleComponent,
    ReformatecComponent,
    TierraGrataComponent,
    IwaComponent,
    NibiComponent,
    WaterComponent,
    TruequerosComponent,
    BiotorComponent,
    ReduvaComponent,
    AspersoresComponent,
    OrganicumComponent,
    MangoComponent,
    HomeServiceComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    NgtUniversalModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NguCarouselModule,
    ComponentsMaterial,
    SlickCarouselModule,
    TransferHttpCacheModule,
    NgxPaginationModule
  ],
  providers: [
    SeoService,
    MicroformatsService,
    BannerService,
    HttpClient,
    ServiceDataEmiterModules
  ],
  entryComponents: [
    DialogVideoComponent,
    HelpComponent,
    ThanksComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
