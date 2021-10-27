import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { APIResponse, Movie } from '../models';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public search = new BehaviorSubject<string>('')

}

