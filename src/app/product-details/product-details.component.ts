import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }

  getDiscountedClasses(product: IProduct) {
    // if (product.discount > 0) return 'strikethrugh';
    // else return '';
    // if (product.discount > 0) return 'strikethrugh bold';
    // else return '';
    // if (product.discount > 0) return ['strikethrugh'];
    // else return [''];
    return { strikethrough: product.discount > 0 };
  }

  getImageUrl(product: IProduct) {
    if(!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
