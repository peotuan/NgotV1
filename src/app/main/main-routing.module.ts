import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../core/container/layout/layout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
