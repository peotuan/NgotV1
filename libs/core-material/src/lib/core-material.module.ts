import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const NG_MODULES = [
  MatToolbarModule,
  MatBadgeModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTabsModule,
  MatMenuModule,
  
];

@NgModule({
  imports: NG_MODULES,
  declarations: [],
  exports: NG_MODULES,
  providers: [
    // {
    //   provide: DateAdapter, useClass: DateFormat
    // },
    // {
    //   provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    // }
  ]
})
export class CoreMaterialModule {}
