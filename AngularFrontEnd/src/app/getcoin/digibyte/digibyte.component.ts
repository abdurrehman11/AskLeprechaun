import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CoinService } from '../../services/coin.service';
import { TweetService } from '../../services/tweet.service';

import { Location } from '@angular/common';

import { timer } from 'rxjs/observable/timer';
import { take, map } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
Observable.of(1,2,3).map(x => x + '!!!'); // etc

import { DatePipe } from '@angular/common';
import {timestamp} from "rxjs/operator/timestamp";



declare var test: any;
declare var TradingView: any;
declare var scripts : any;
declare var embedder : any;
declare var cccTheme : any;

declare var appName : any;
declare var s : any;
declare var theUrl : any;

declare var d: Date;



@Component({
  selector: 'app-digibyte',
  templateUrl: './digibyte.component.html',
  styleUrls: ['./digibyte.component.scss']
})
export class DigibyteComponent implements OnInit {


  g(){
    new TradingView.widget(
        {
          // "autosize": true,
          "symbol": "BITTREX:DGBBTC",
          "interval": "D",
          "timezone": "Etc/UTC",
          "width": 900,
          "height": 610,
          "theme": "Dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "details": true,
          "news": [
            "headlines"
          ],
          "hideideas": true,
          "show_popup_button": true,
          "popup_width": "1110",
          "popup_height": "600",
          "container_id": "tradingview_0d880"
        }
    );
  };

  constructor( private router: Router,
               private location: Location,
               private coinService: CoinService,
               private tweetService: TweetService
  ) {


      this.settime();
      this.starttime();

      this.countDown2 = timer(0,60000).pipe(
          take(this.count2),
          map(()=> --this.count2)
      );



      setInterval(() => {this.starttime();},60000);

      // setTimeout(() => {this.starttime();}, 60000);






      this.timelimit =  ((this.count2 * 60) ) * 1000;
      if ( this.count2 == 0  || this.count2 == 15 || this.count2 == 30 || this.count2 == 45 ){ this.timelimit = 60000; }

      setTimeout(() => {this.pagerefresh(); },this.timelimit );







  }

  // get Digibyte Prediction
  getDigibytePrediction() {
    this.coinService.getDigibytePrediction().subscribe(data => {
      console.log(data);
    })
  }

    // get Digibyte Tweet
  getDigibyteTweet() {
    this.tweetService.getDigibyteTweet().subscribe(data => {
      console.log(data);
    })
  }


    starttime()
    {
        this.count=60;
        this.countDown = timer(0, 1000).pipe(
            take(this.count),
            map(() => --this.count)
        );

    }

    d = new Date;
    min = this.d.getMinutes();

    countDown;
    count = this.d.getSeconds();
    countDown2;
    count2;
    timelimit;
    // min = this.d.getMinutes();
    // fixedTimezone = '2015-06-15T09:03:01+0900';

    settime(){
        // location.reload();

        if(60- this.min < 15)
        { this.count2 = 60 - this.min;}

        else if (45- this.min < 15)
        { this.count2 = 45 - this.min;}

        else if (30- this.min < 15)
        { this.count2 = 30 - this.min;}

        else
        {this.count2 = 15 - this.min;}

    };



    pagerefresh(){location.reload();}


    ngOnInit() {

this.g();

  }

}
