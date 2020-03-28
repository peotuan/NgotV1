import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreUiComponent } from '@nttp/core-ui/src/lib/core-ui.component';
import { PttPinModule } from '@nttp/core-ui/src/lib/ptt-pin/ptt-pin.module';
import { DetectFocusDirective } from '@nttp/core-ui/src/lib/directives/detect-focus.directive';
import { InputMaskDirective } from '@nttp/core-ui/src/lib/directives/input-mask.directive';
import { HasRoleDirective } from '@pg-app/core/services/roles/role.directive';

@NgModule({
  imports: [CommonModule, PttPinModule],
  declarations: [CoreUiComponent, DetectFocusDirective, InputMaskDirective, HasRoleDirective],
  exports: [CoreUiComponent, PttPinModule, DetectFocusDirective, InputMaskDirective, HasRoleDirective]
})
export class CoreUiModule {}
