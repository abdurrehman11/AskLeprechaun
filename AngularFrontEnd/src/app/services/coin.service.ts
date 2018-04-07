import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinService {

  domain = "http://localhost:8080";
  authToken;

  constructor(
    private http: Http
  ) { }

   // get ethereum prediction 
  getEthereumPrediction() {
    return this.http.get(this.domain + '/price/ethereum').map(res => res.json());
  }

   // get lite prediction 
  getLitePrediction() {
    return this.http.get(this.domain + '/price/lite').map(res => res.json());
  }

   // get dash prediction 
  getDashPrediction() {
    return this.http.get(this.domain + '/price/dash').map(res => res.json());
  }

   // get digibyte prediction 
  getDigibytePrediction() {
    return this.http.get(this.domain + '/price/digibyte').map(res => res.json());
  }

   // get ripple prediction 
  getRipplePrediction() {
    return this.http.get(this.domain + '/price/ripple').map(res => res.json());
  }

}
