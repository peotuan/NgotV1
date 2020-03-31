import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-layout-nav',
  templateUrl: './layout-nav.component.html',
  styleUrls: ['./layout-nav.component.scss']
})
export class LayoutNavComponent implements OnInit {
  public itemProductList = [
    { name: 'Sách giáo khoa', image: 'assets/product/sach-giao-khoa-toan-lop-5.jpg', price: '40.000đ' },
    { name: 'Sách giáo khoa', image: 'assets/product/sach-giao-khoa-toan-lop-5.jpg', price: '40.000đ' },
    { name: 'Sách giáo khoa', image: 'assets/product/sach-giao-khoa-toan-lop-5.jpg', price: '40.000đ' },
    { name: 'Sách giáo khoa', image: 'assets/product/sach-giao-khoa-toan-lop-5.jpg', price: '40.000đ' },
    { name: 'Sách giáo khoa', image: 'assets/product/sach-giao-khoa-toan-lop-5.jpg', price: '40.000đ' },
    { name: 'Sách giáo khoa', image: 'assets/product/sach-giao-khoa-toan-lop-5.jpg', price: '40.000đ' },
    { name: 'Sách giáo khoa', image: 'assets/product/sach-giao-khoa-toan-lop-5.jpg', price: '40.000đ' },
    { name: 'Sách giáo khoa', image: 'assets/product/sach-giao-khoa-toan-lop-5.jpg', price: '40.000đ' }
  ];

  public categoryHeadList = [
    { image: 'assets/category/csgn.png', id: 0 },
    { image: 'assets/category/lycoc.png', id: 1 },
    { image: 'assets/category/gau.png', id: 2 },
    { image: 'assets/category/cooky.png', id: 3 }
  ];

  public categoryItem = [
    {image: 'assets/product/csgn.jpg', id: 0},
    {image: 'assets/product/csgn.jpg', id: 1},
    {image: 'assets/product/csgn.jpg', id: 2},
    {image: 'assets/product/csgn.jpg', id: 3},
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor() {}

  ngOnInit(): void {}
}
