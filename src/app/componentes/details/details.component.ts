import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../../models';
import { CartService } from '../services/cart.service';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  movieId: any;
  movie: Movie | undefined;
  routeSub: Subscription | undefined;
  movieSub: Subscription | undefined;


  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private cartService: CartService,
  
 
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.movieId = params['id'];
      this.getMovieDetails(this.movieId);

    });
    
  }

  getMovieDetails(id: string): void {
    this.movieSub = this.httpService
      .getMovieDetails(id)
      .subscribe((movieInfoRequest: Movie) => {
        this.movie = movieInfoRequest;
        console.log(movieInfoRequest)
       
      });
  }
    
  addToCart(item: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(item);
  }
 
    ngOnDestroy(): void {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}

