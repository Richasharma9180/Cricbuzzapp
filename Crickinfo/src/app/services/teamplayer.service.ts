import { Injectable } from '@angular/core';
import { teamplayer } from '../models/teamplayer';

@Injectable({
providedIn: 'root'
})
export class TeamplayerService  {

tplayer=[new teamplayer("India"),
new teamplayer("Pakistan"),
new teamplayer("Australia"),

];

constructor(){}

}
