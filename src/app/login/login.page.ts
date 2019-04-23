import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ScheduleService } from './../services/schedule.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email='';
  password='';
  client;

  constructor(public scheduleService: ScheduleService, public http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login(){
      //console.log(this.email);
      //console.log(this.password);
      this.scheduleService.login(this.email, this.password)
      .subscribe(
        (data)=> {this.client = (data);},
        (error)=> {console.log(error);}
      )
      //console.log(this.client);
      if(this.client){
        //console.log("Existo");
        this.router.navigate(['/menu']);
        
      }
      /*if(this.client != "false"){
        this.router.navigateByUrl('/tabs/tab1');

      }*/
  }

}
