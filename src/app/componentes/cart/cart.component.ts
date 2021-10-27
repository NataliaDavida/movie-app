import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  items: any;

  constructor( private cartService: CartService) {}
  

    ngOnInit() {
     this.items = JSON.parse(localStorage.getItem("movie") || '[]')
     
    }

    deleteFromCart(item: any) {
      window.alert('Your product has been delete from the cart!');
      this.cartService.deleteFromCart(item);
      console.log(this.items)
    }
}
