import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ResizerComponent } from './components/navigation/resizer/resizer.component';
import { ProjectRoutingModule } from './project-routing.module';
import { NavigationModule } from './components/navigation/navigation.module';
@NgModule({
  declarations: [
    ProjectComponent,
    ResizerComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NavigationModule,
  ]
})
export class ProjectModule { }
