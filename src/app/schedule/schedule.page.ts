import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './../services/schedule.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
//import { resolveAny } from 'dns';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  carrier = '';
  flightnumber = 0;
  year = 0;
  month = 0;
  day = 0;
  usuarios;

  constructor(public scheduleService: ScheduleService, public http: HttpClient) { }

  ngOnInit() {
  }
  /*
  searchSchedules(){
    console.log('My carrier:', this.carrier);
    console.log('My flightnumber:', this.flightnumber);
    console.log('My year:', this.year);
    console.log('My month:', this.month);
    console.log('My day:', this.day);
    this.scheduleService.searchSchedules(this.carrier, this.flightnumber, this.year, this.month, this.day)
    .subscribe((data)=>{this.flights = data;},
    (error)=>{console.log(error);})
    console.log(this.flights);
    //this.flights = this.scheduleService.searchSchedules(this.carrier, this.flightnumber, this.year, this.month, this.day);
    //console.log(this.flights);
  }
  */
 searchSchedules(){
  //console.log('My carrier:', this.carrier);
  //console.log('My flightnumber:', this.flightnumber);
  //console.log('My year:', this.year);
  //console.log('My month:', this.month);
  //console.log('My day:', this.day);
  //this.results = this.scheduleService.searchSchedules(this.carrier, this.flightnumber, this.year, this.month, this.day);
  this.scheduleService.searchSchedules(this.carrier, this.flightnumber, this.year, this.month, this.day)
  .subscribe(
    (data)=> {this.usuarios = (data);},
    (error)=> {console.log(error);}
  )
  console.log(this.usuarios);



  }



}
