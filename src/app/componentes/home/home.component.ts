import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Movie } from '../../models';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Array<Movie> | undefined;
  private movieSub: Subscription | undefined;


  constructor(    
    private httpService: HttpService,
    private router: Router,
   ) { }

  ngOnInit(): void {

    this.movieSub = this.httpService
    .getMovieList()
    .subscribe((movieList: APIResponse<Movie>) => {
      this.movies = movieList.results;
    });
   
  }
     
      openMovieDetails(id: string): void {
        this.router.navigate(['details', id]);
      }

    

      ngOnDestroy(): void {
        if (this.movieSub) {
          this.movieSub.unsubscribe();
        }

      }
}
