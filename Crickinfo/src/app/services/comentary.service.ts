import { Injectable } from '@angular/core';
import { Comentary } from '../models/comentary';

@Injectable({
providedIn: 'root'
})
export class ComentaryService {
Comentary1:Array<Comentary>=[];

constructor() { }

addComentary(Ball:any,Description:any,Overs:number)
{
   this.Comentary1.push(new Comentary(Ball,Description,Overs));
}
}