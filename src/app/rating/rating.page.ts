import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ScheduleService } from './../services/schedule.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {

  carrier = '';
  flightNumber = '';
  rating;

  constructor(public scheduleService: ScheduleService, public http: HttpClient) { }

  ngOnInit() {
  }

  searchRating(){
    this.scheduleService.searchRating(this.carrier, this.flightNumber)
  .subscribe(
    (data)=> {this.rating = (data);},
    (error)=> {console.log(error);}
  )
  console.log(this.rating);
  }

}
