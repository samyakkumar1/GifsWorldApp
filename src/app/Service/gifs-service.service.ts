import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  /**The API key we got from giphy.com */
  API_KEY:string="hPC6RV9jOXs2lIJpKqmvO448iy74ADKE"

  constructor(private http:HttpClient) { }
  /**getGifs function make's API request to the server and returns the response  */
    getGifs(searchTerm:string){
      return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&limit=50&q=${searchTerm}`);
    }
}
