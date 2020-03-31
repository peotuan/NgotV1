import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuList } from 'src/app/core/shared/menu-list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  public navList: Array<any>;
  public openCategory: false;

  constructor() {
    this.navList = MenuList;
  }

  ngOnInit() {}
}
