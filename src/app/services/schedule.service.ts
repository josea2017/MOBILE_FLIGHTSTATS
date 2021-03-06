import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { SchedulePage } from '../schedule/schedule.page';
//import { map, delay, catchError } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  //https://api.flightstats.com/flex/schedules/rest/v1/json/flight/AA/100/departing/2019/4/18?appId=1f701fb0&appKey=224667587a4c65c3798d047b89209283
  url = 'https://api.flightstats.com/flex/schedules/rest/v1/json/flight';
  departing = '/departing/';
  appId = '1f701fb0';
  appKey = '224667587a4c65c3798d047b89209283';
  
  constructor(public http: HttpClient) { }
  
  searchSchedules(carrier, flightnumber, year, month, day){
    var headers1 = new HttpHeaders();
    headers1.append("Accept", 'application/json');
    headers1.append('Content-Type', 'application/json/' );
    //return this.http.get(`${this.url}/${carrier}/${flightnumber}${this.departing}${year}/${month}/${day}?appId=${this.appId}&appKey=${this.appKey}`);
    //var response = null;
   //const headers = {'Content-Type': 'application/json'};
   //this.http.get('YOUR_API_ENDPOINT').map(res => res.json()).subscribe(data => {
    //console.log(data);
    //});
    var url = `${this.url}/${carrier}/${flightnumber}${this.departing}${year}/${month}/${day}?appId=${this.appId}&appKey=${this.appKey}`;
    //var response = this.http.get(url);
    //return response;
    return this.http.get(url);
   }

   searchWeather(airport, codeType){
    //https://api.flightstats.com/flex/weather/rest/v1/json/metar/JFK?appId=1f701fb0&appKey=224667587a4c65c3798d047b89209283&codeType=IATA
    //var response = this.http.get(url);
    //return response;
    var urlW = 'https://api.flightstats.com/flex/weather/rest/v1/json/metar/';
    var urlW2 = `${urlW}${airport}?appId=${this.appId}&appKey=${this.appKey}&codeType=${codeType}`;
    return this.http.get(urlW2);
   }

   searchRating(carrier, flightNumber){
    //https://api.flightstats.com/flex/ratings/rest/v1/json/flight/AA/25?appId=1f701fb0&appKey=224667587a4c65c3798d047b89209283
    var urlW = 'https://api.flightstats.com/flex/ratings/rest/v1/json/flight/';
    var urlW2 = `${urlW}${carrier}/${flightNumber}?appId=${this.appId}&appKey=${this.appKey}`;
    return this.http.get(urlW2);
   }

   login(email, password){
    //http://localhost:8000/api/searchClient
    var urlW = 'http://localhost:8000/api/searchClient';
    var urlW2 = `${urlW}?email=${email}&password=${password}`;
    return this.http.get(urlW2);
    
   }

}
