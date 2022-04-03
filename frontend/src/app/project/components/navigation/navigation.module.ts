import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponents } from '.';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { JiraControlModule } from 'src/app/jira-control/jira-control.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [...NavigationComponents],
  imports: [
    CommonModule,
    NzToolTipModule,
    NzIconModule,
    JiraControlModule,
    RouterModule
  ],
  exports: [...NavigationComponents]
})
export class NavigationModule { }
