import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ScheduleService } from './../services/schedule.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  airport = '';
  codeType = '';
  weather;

  constructor(public scheduleService: ScheduleService, public http: HttpClient) { }

  ngOnInit() {
  }

  searchWeather(){
    this.scheduleService.searchWeather(this.airport, this.codeType)
  .subscribe(
    (data)=> {this.weather = (data);},
    (error)=> {console.log(error);}
  )
  console.log(this.weather);
  }

}
