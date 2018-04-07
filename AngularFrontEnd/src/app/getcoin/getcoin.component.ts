import { Component, OnInit } from '@angular/core';
import {stringDistance} from "codelyzer/util/utils";
import { Pipe, PipeTransform } from '@angular/core';


@Component({
    selector: 'get-coin',
    templateUrl: './getcoin.component.html',
    styleUrls: ['./getcoin.component.scss'],
})

// let items:string[];



export class GetcoinComponent implements OnInit {

    // items = ['ahsan', 'bilal','Abudur-Rahman'];
    // items: string[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];





    constructor() {
        //this.users = ['ahsan', 'bilal'];
        // items = ["1","2","3","4"];

    }

    ngOnInit() {}


}

