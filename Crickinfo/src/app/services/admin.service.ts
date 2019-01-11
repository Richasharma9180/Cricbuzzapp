 import { Injectable } from '@angular/core';
 import { Admin} from '../models/Admin';

 @Injectable({
   providedIn: 'root'
 })
 export class AdminService {

  teams: Array<Admin> = [];
constructor() {}

score (team1:string,team2:string,toss:string,date:Date,overs:number){
this.teams.push(new Admin(team1,team2,toss,date,overs))
}
  
  }
