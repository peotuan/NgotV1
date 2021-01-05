import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../../services/product-detail.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public detailProduct: any;
  public isShowShare = false;
  constructor(private productDetailService: ProductDetailService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getProductDetail();
  }

  public formatPrice(value: any) {
    if (!value || value.toString().trim() === '') {
      return;
    }
    if (value === 0) {
      return '';
    }
    const parts = Number(value)
      .toFixed(0)
      .toString()
      .split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.') + 'đ';
  }

  public getProductDetail() {
    // this.productDetailService.getProductDetail(1).subscribe(
    //   (data) => {
    //     this.detailProduct = data;
    //   },
    //   (err) => {}
    // );
    this.detailProduct = {
      name: 'Dép quai ngang Gấu nâu Cherry',
      code: 'M.G204.NO.20032263',
      price: this.formatPrice('135000'),
      color: '#ffffff',
      size: [37, 39],
    };
  }

  public shareIconClick() {
    this.isShowShare = !this.isShowShare;
  }
}
