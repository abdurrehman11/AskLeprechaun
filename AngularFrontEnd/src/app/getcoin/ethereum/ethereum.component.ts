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
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.scss']
})
export class EthereumComponent implements OnInit {

    d = new Date;
    min = this.d.getMinutes();

    countDown;
    count = this.d.getSeconds();
    countDown2;
    count2;
    timelimit;
    predicted;
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



    constructor(
        private router: Router,
        private location: Location,
        private coinService: CoinService,
        private tweetService: TweetService
    ) {

        this.getEthereumPrediction();
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

    // get Ethereum Prediction
  getEthereumPrediction() {
    this.coinService.getEthereumPrediction().subscribe(data => {
      if(data.success) {
        this.predicted = data.prices.predictedClose;
        console.log(this.predicted);
      } else {
        this.predicted = 410.32;
        console.log(this.predicted);
      }
    })
  }

    // get Ethereum Tweet
  getEthereumTweet() {
    var sentiment;
    var SystemtimeStamp = Math.floor(Date.now() / 1000);
    this.tweetService.getEthereumTweet().subscribe(data => {
      if(data.success) {
        var DBtimestamp = data.polarity.timestamp;
        var pol = data.polarity.polarity;
        console.log(pol);
        SystemtimeStamp = SystemtimeStamp - 86400;    // one day impact
        console.log(SystemtimeStamp);
        
        if(DBtimestamp > SystemtimeStamp) {
          console.log("here");
          if(pol >=0 && pol <= 0.3) {
            sentiment = "Normal Behaviour";
            console.log(sentiment);
          } else if (pol > 0.3) {
            sentiment = "Favourable Trading Conditions";
            console.log(sentiment);
          } else if (pol < 0 && pol >= -0.3) {
            sentiment = "Slightly Risky Trading Conditions";
            console.log(sentiment);
          } else {
            sentiment = "Highly Risky Trading Conditions";
            console.log(sentiment);
          }
        } else {
          sentiment = "Normal Behaviour";
          console.log(sentiment);
        }
      } else {
        sentiment = "Normal Behaviour";
        console.log(sentiment);
      }
    })
  }


  f(){
    new test();
  }

  g(){
    new TradingView.widget(
        {
          // "autosize": true,
          "symbol": "BITTREX:ETHBTC",
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


    starttime()
    {
        this.count=60;
        this.countDown = timer(0, 1000).pipe(
            take(this.count),
            map(() => --this.count)
        );

    }


    pagerefresh(){location.reload();}



  ngOnInit() {

    this.g();
    // this.h();



  }

}
