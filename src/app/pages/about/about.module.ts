import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { UiModule } from '../../ui/ui.module';


@NgModule({
  declarations: [
    AboutComponent,

  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    UiModule
  ]
})
export class AboutModule { }
