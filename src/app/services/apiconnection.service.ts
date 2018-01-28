import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiconnectionService {

  constructor(private http: Http) { }

  private baseurl = 'http://localhost:4200/';
  private dataRecieved: String;
  private dRecieved: any;
  private API_hit_counter = 0;

  ngOninit() {
  }

  public getData(url) {
    this.dRecieved = this.http.get(this.baseurl + 'assets/data.json' )
                          .map(response => response.json());
    this.API_hit_counter = this.API_hit_counter + 1;
    return this.dRecieved;
  }
  
  public postData(url, jsonData) {
    this.dRecieved = this.http.post(this.baseurl + url , jsonData )
      .map(res => res.json() );
    this.API_hit_counter = this.API_hit_counter + 1;
    return this.dRecieved;
  }
  public hitcounter() {
    return this.API_hit_counter;
  }
}
