import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }
  getData()
  {
    return this.http.get('http://www.omdbapi.com/?apikey=f0c79fe8&i=tt3896198');
  }
}
