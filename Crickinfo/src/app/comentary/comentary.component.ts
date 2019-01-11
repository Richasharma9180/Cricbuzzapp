import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerlistService} from 'src/app/services/playerlist.service';
import { ComentaryService } from '../services/comentary.service';


@Component({
  selector: 'app-comentary',
  templateUrl: './comentary.component.html',
  styleUrls: ['./comentary.component.css']
})
export class ComentaryComponent implements OnInit {
comm1;

  // @ViewChild('Ball')ballinf :ElementRef;
  // @ViewChild('Description')desscriptioninf :ElementRef;
  // @ViewChild('Overs')Oversinf :ElementRef;

  constructor(comen:ComentaryService) {
    this.comm1=comen.Comentary1;
   }

  ngOnInit() {
  }
  
}
   
