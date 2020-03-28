import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PttPinComponent } from '@nttp/core-ui/src/lib/ptt-pin/ptt-pin.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PttPinComponent
  ],
  exports: [
    PttPinComponent
  ]
})
export class PttPinModule {
}
