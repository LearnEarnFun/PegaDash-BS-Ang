import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { SummaryPageRoutingModule } from './summary-page-routing.module';
import { SummaryPageComponent } from './summary-page.component';
// import { RecentTreasurerCaseListComponent } from '../pega/recentTreasurerCases/recentTreasurerCaseList.component';
// import { UnifiedtasklistComponent } from '../../shared/pegaComponents/unifiedtasklist/unifiedtasklist.component';

import {
  TimelineComponent,
  NotificationComponent,
  ChatComponent,
  UnifiedtasklistComponent
} from './components';

import { StatModule } from '../../shared';
import { LayoutModule } from './../layout.module';
// import { RecentTreasurerCaseListComponent } from '../pega';
//  import { RecentTreasurerCaseListComponent } from '../pega';
@NgModule({
    imports: [

      CommonModule
       , LayoutModule
      , NgbCarouselModule
      , NgbAlertModule
      , StatModule
      , SummaryPageRoutingModule
      // , RecentTreasurerCaseListComponent
    ],
    declarations: [
      SummaryPageComponent
      , TimelineComponent
      , NotificationComponent
      , ChatComponent
      , UnifiedtasklistComponent
      //  , RecentTreasurerCaseListComponent
      // , RecentTreasurerCaseListCompo nent

    ],
    exports: [
      // RecentTreasurerCaseListComponent
    ]
})
export class SummaryPageModule {}
