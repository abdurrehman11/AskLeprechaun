import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TweetService {

  domain = "http://localhost:8080";

  constructor(
    private http: Http
  ) { }

   // get ethereum prediction 
  getEthereumTweet() {
    return this.http.get(this.domain + '/tweet/ethereum').map(res => res.json());
  }

   // get lite prediction 
  getLiteTweet() {
    return this.http.get(this.domain + '/tweet/lite').map(res => res.json());
  }

   // get dash prediction 
  getDashTweet() {
    return this.http.get(this.domain + '/tweet/dash').map(res => res.json());
  }

   // get digibyte prediction 
  getDigibyteTweet() {
    return this.http.get(this.domain + '/tweet/digibyte').map(res => res.json());
  }

   // get ripple prediction 
  getRippleTweet() {
    return this.http.get(this.domain + '/tweet/ripple').map(res => res.json());
  }

}
