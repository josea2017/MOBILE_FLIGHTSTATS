import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { SchedulePage } from '../schedule/schedule.page';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  //https://api.flightstats.com/flex/schedules/rest/v1/json/flight/AA/100/departing/2019/4/18?appId=1f701fb0&appKey=224667587a4c65c3798d047b89209283
  url = 'https://api.flightstats.com/flex/schedules/rest/v1/json/flight';
  departing = '/departing/';
  appId = '1f701fb0';
  appKey = '224667587a4c65c3798d047b89209283';
  loading: boolean;
  countries:SchedulePage[] = [];
  
  
  constructor(public http: HttpClient) { }
  
  searchSchedules(carrier, flightnumber, year, month, day) {
    var headers1 = new HttpHeaders();
    headers1.append("Accept", 'application/json');
    headers1.append('Content-Type', 'application/' );
  
    //return this.http.get(`${this.url}/${carrier}/${flightnumber}${this.departing}${year}/${month}/${day}?appId=${this.appId}&appKey=${this.appKey}`);
    //var response = null;
   //const headers = {'Content-Type': 'application/json'};
   //this.http.get('YOUR_API_ENDPOINT').map(res => res.json()).subscribe(data => {
    //console.log(data);
    //});
    var url = '' + this.url + '/' + carrier + '/' + flightnumber + this.departing + year + '/' +
                     month + '/' + day + '?appId=' + this.appId + '&appKey=' + this.appKey +'';
    var response = this.http.get(url).pipe(map(res => {
      console.log('RAW:', res);
    }));

    
    const responseObserver = {
      next: x => console.log('ObserverFlight got a next value: ' + x),
      error: err => console.error('ObserverFlight got an error: ' + err),
      complete: () => console.log('ObserverFlight got a complete notification'),
    };
    response.subscribe(responseObserver);
    
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);
    // Create observer object
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    myObservable.subscribe(myObserver);
   

  }


  
 /*
 searchSchedules(carrier, flightnumber, year, month, day): Observable<any> {
  var headers1 = new HttpHeaders();
  headers1.append("Accept", 'application/json');
  headers1.append('Content-Type', 'application/' );
  console.log(carrier);
  console.log(flightnumber);
  
  var url = '' + this.url + '/' + carrier + '/' + flightnumber + this.departing + year + '/' +
                   month + '/' + day + '?appId=' + this.appId + '&appKey=' + this.appKey +'';
  return this.http.get(url).pipe(
    map(results=>{
      console.log('RAW:', results);
      return results;
    }));
}
*/

//map(results=>results['Search']));
}
