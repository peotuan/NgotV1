import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [AboutComponent]
})
export class MainModule { }
