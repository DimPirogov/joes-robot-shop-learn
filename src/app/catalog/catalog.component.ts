import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products!: IProduct[];
  filter: string = '';
  // private cartSvc: CartService = inject(CartService);

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    });
    // this.filter = this.route.snapshot.params['filter'];

    // this.route.params.subscribe((params) => {
    //   this.filter = params['filter'] ?? '';
    // })

    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product) => product.category === this.filter);
  }

}
