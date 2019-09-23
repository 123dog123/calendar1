/*
Calendar module developed by @Matt Lewis
https://github.com/mattlewis92
*/

import { Component, OnInit } from '@angular/core';
import {calendarEvent} from '../calendarEvent'
import { AddEventService } from '../addevent.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
  years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"]
  hours = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  mins = ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]
  periods = ["AM", "PM"]

  title = 'calendar';
  eventModel = new calendarEvent('','','','','');
  
  startMonth = ""
  selectStartYear = "Starting Year";
  selectStartMonth = "Starting Month";
  selectStartDay = "Starting Day";
  selectStartHour = "Hour"
  selectStartMinute = "Minute"
  selectStartPeriod = "AM"
  trueStartHour = ""

  endMonth = ""
  selectEndYear = "Ending Year";
  selectEndMonth = "Ending Month";
  selectEndDay = "Ending Day";
  selectEndHour = "Hour"
  selectEndMinute = "Minute"
  selectEndPeriod = "AM"
  trueEndHour = ""


  constructor(private _addEventService: AddEventService){}

  onSubmit() {
    if (this.selectStartMonth == "January") {
      this.startMonth = "01";
    } else if (this.selectStartMonth == "Feburary") {
      this.startMonth = "02";

    } else if (this.selectStartMonth == "March") {
      this.startMonth = "03";

    } else if (this.selectStartMonth == "April") {
      this.startMonth = "04";

    } else if (this.selectStartMonth == "May") {
      this.startMonth = "05";

    } else if (this.selectStartMonth == "June") {
      this.startMonth = "06";

    } else if (this.selectStartMonth == "July") {
      this.startMonth = "07";

    } else if (this.selectStartMonth == "August") {
      this.startMonth = "08";

    } else if (this.selectStartMonth == "September") {
      this.startMonth = "09";

    } else if (this.selectStartMonth == "October") {
      this.startMonth = "10";

    } 
    else if (this.selectStartMonth == "November") {
      this.startMonth = "11";

    }
    else if (this.selectStartMonth == "December") {
      this.startMonth = "12";
    }

    if (this.selectEndMonth == "January") {
      this.endMonth = "01";
    } else if (this.selectEndMonth == "Feburary") {
      this.endMonth = "02";

    } else if (this.selectEndMonth == "March") {
      this.endMonth = "03";

    } else if (this.selectEndMonth == "April") {
      this.endMonth = "04";

    } else if (this.selectEndMonth == "May") {
      this.endMonth = "05";

    } else if (this.selectEndMonth == "June") {
      this.endMonth = "06";

    } else if (this.selectEndMonth == "July") {
      this.endMonth = "07";

    } else if (this.selectEndMonth == "August") {
      this.endMonth = "08";

    } else if (this.selectEndMonth == "September") {
      this.endMonth = "09";

    } else if (this.selectEndMonth == "October") {
      this.endMonth = "10";

    } 
    else if (this.selectEndMonth == "November") {
      this.endMonth = "11";

    }
    else if (this.selectEndMonth == "December") {
      this.endMonth = "12";
    }

    if (this.selectStartPeriod == "PM" && this.selectStartHour != "12") {
      var x = Number(this.selectStartHour);
      console.log(x)  
      x = x + 12;
      this.trueStartHour = String(x);
    } 
    else {
      this.trueStartHour = this.selectStartHour;
    }

  
    if (this.selectEndPeriod == "PM" && this.selectEndHour != "12") {
       var x = Number(this.selectEndHour);
       console.log(x)  
       x = x + 12;
       this.trueEndHour = String(x);

    } else {
      this.trueEndHour = this.selectEndHour;
    }

    this.eventModel.start_date = this.selectStartYear + "-" + this.startMonth + "-" + this.selectStartDay + " " + this.trueStartHour + ":" + this.selectStartMinute + ":00"
    this.eventModel.end_date = this.selectEndYear + "-" + this.endMonth + "-" + this.selectEndDay + " " + this.trueEndHour + ":" + this.selectEndMinute + ":00"
  
    console.log(this.eventModel); 


    this._addEventService.sendEvent(this.eventModel)
      .subscribe(
        data => console.log("Success!", data),
        error => console.error("Error!", error)
      )
  
  }

  ngOnInit() {
  }

}


