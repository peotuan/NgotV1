import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CustomHttpInterceptor } from './interceptors/custom-http.interceptor';
import { GlobalErrorHandler } from './services/global-error-handler';
import { CoreMaterialModule } from 'libs/core-material/src/lib/core-material.module';
import { LayoutNavComponent } from './component/layout-nav/layout-nav.component';
import { AppComponent } from './container/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './container/layout/layout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, LayoutNavComponent, LayoutComponent, NavBarComponent],
  imports: [BrowserModule, RouterModule, CommonModule, RouterModule, CoreMaterialModule, CarouselModule],
  exports: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
