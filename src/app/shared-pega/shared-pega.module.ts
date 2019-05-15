// import { HomePageComponent } from './../layout/pega/home-page/home-page.component';
// import { ModalContainerComponent } from './../../../.history/src/app/layout/pega/modal-container/modal-container.component_20190514143918';
// import { EmailByCategoryComponent } from './../layout/pega/kpi-report/email-by-category/email-by-category.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NbaTeaserComponent } from './../layout/pega/nba-teaser/nba-teaser.component';
import { NbaCaptureResponseComponent } from './../layout/pega/nba-capture-response/nba-capture-response.component';
// import { ModalComponent } from './../layout/bs-component/components/modal/modal.component';
// import { OpenAssignmentService } from './../_messages/openassignment.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

// import { ChartDataLabels } from 'chartjs-plugin-datalabels';

import { AppMaterialModule } from '../app-material/app-material.module';
import { SharedPegaStarterPackModule } from './shared-pega-starterPackItems.module';
import { RciMashupComponent } from '../layout/pega/mashups/rci-mashup/rci-mashup.component';
import { SafeHtml, SafeStyle, SafeUrl } from '../layout/pega/_pipes/safe';

import {
   CaselistComponent
  // , FileNameDialogComponent
  // , ModalContainerComponent
  , CreateCustomRCIcaseComponent
  , EmailByCategoryComponent
  , HomePageComponent

  , InCorrAutoReplyTrendComponent
  , MegaMenuComponent
  // , ModalContainerComponent
  , ModalRCIContainerComponent
  , ModalRCIPegaComponent
  , ModalWorkItemComponent
  , NbaOfferComponent
  , OpenByWorkTypeComponent
  , PegaPieChartComponent
  , RecentInteractionsComponent
  , RecentTreasurerCaseListComponent
  , RelAccountListComponent
  , RciCheckResultTableComponent
  , StatusRecentTreasurerComponent
  , TransactionSummaryComponent
  , WorkitemComponent
  , PWorkItemComponent
  , ValueTrendIndicatorArrowComponent
  , Workitem1Component
  // , HeroChildComponent
} from '../layout/pega';

// import { HeroParentComponent } from '../layout/components/header/header.component';
@NgModule({
  imports: [
    FormsModule
   , ReactiveFormsModule
   , CommonModule
   , AppMaterialModule
   , SharedPegaStarterPackModule
   , Ng2Charts

  ],
  providers: [
    // CaselistComponent
  ],
  declarations: [
    CaselistComponent
    // , FileNameDialogComponent
    // , ModalContainerComponent
    , MegaMenuComponent
    , ModalRCIContainerComponent
    , CreateCustomRCIcaseComponent
    , EmailByCategoryComponent
    , HomePageComponent
    , InCorrAutoReplyTrendComponent
    // , ChartDataLabels
    // , ModalContainerComponent
    , ModalRCIContainerComponent
    , ModalRCIPegaComponent
    , ModalWorkItemComponent
    , NbaCaptureResponseComponent
    , NbaOfferComponent
    , NbaTeaserComponent
    , OpenByWorkTypeComponent
    , PegaPieChartComponent
    , RecentInteractionsComponent
    , RecentTreasurerCaseListComponent
    , RciMashupComponent
    , RciCheckResultTableComponent
    , RelAccountListComponent
    , StatusRecentTreasurerComponent
    , TransactionSummaryComponent
    , ValueTrendIndicatorArrowComponent
    , WorkitemComponent
    , PWorkItemComponent
    , Workitem1Component

    , SafeHtml
    , SafeStyle
    , SafeUrl
    // , HeroParentComponent
    // , HeroChildComponent
  ],
  exports: [
    CaselistComponent
      , CreateCustomRCIcaseComponent
     , EmailByCategoryComponent
      , HomePageComponent
      , InCorrAutoReplyTrendComponent
      // , FileNameDialogComponent
      // , ModalContainerComponent
      , MegaMenuComponent
      // , ModalContainerComponent
      , ModalRCIContainerComponent
      , ModalRCIPegaComponent
      , ModalWorkItemComponent


    // , ChartDataLabels
    , NbaCaptureResponseComponent
    , NbaOfferComponent
    , NbaTeaserComponent
    , OpenByWorkTypeComponent
    , PegaPieChartComponent
    , RecentInteractionsComponent
    , RecentTreasurerCaseListComponent
    , RciCheckResultTableComponent
    , RciMashupComponent
    , RelAccountListComponent
    , StatusRecentTreasurerComponent
    , TransactionSummaryComponent
    , WorkitemComponent
    , PWorkItemComponent
    , ValueTrendIndicatorArrowComponent
    , Workitem1Component
    , ModalWorkItemComponent

    , SafeHtml
    , SafeStyle
    , SafeUrl
    // , HeroParentComponent
    // , HeroChildComponent
  ],
  entryComponents: [
  //  FileNameDialogComponent
  //  , ModalContainerComponent
    ModalRCIContainerComponent
  , RciMashupComponent
   , ModalRCIPegaComponent
   , CreateCustomRCIcaseComponent
   , WorkitemComponent
   , ModalWorkItemComponent
   , RciCheckResultTableComponent
  //  , HeroParentComponent
    // , HeroChildComponent
  ]
})
export class SharedPegaModule { }
