import { Injectable } from '@angular/core';
import { Playerlist } from '../models/playerlist';

@Injectable({
providedIn: 'root'
})
export class PlayerlistService {

playernames1:Array<string>=[];
playernames2:Array<string>=[];
constructor() { }

addPlayerList(playerlist:Array<string>)
{
this.playernames1=playerlist;
this.playernames2=playerlist;
console.log(this.playernames1);
console.log(this.playernames2);
}
}