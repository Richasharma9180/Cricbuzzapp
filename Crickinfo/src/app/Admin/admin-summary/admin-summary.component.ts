import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { PlayerlistService} from 'src/app/services/playerlist.service';
import { Playerlist } from 'src/app/models/playerlist';
import { ComentaryService } from 'src/app/services/comentary.service';


@Component({
  selector: 'app-admin-summary',
  templateUrl: './admin-summary.component.html',
  styleUrls: ['./admin-summary.component.css']
})
export class AdminSummaryComponent implements OnInit {
  player1;
  player:Playerlist[];
 
  constructor(PlayerlistService:PlayerlistService,AdminService:AdminService,private router: Router, private route: ActivatedRoute, commentryService: ComentaryService) {
    this.player1=PlayerlistService.playernames1;
    this.player1=PlayerlistService.playernames2;
    this.comm = commentryService;
   }
  
  ngOnInit() {
    
  }
  @ViewChild('team1')team1inf :ElementRef;
  @ViewChild('team2')team2inf :ElementRef;
  @ViewChild('toss')tossinf :ElementRef;
  @ViewChild('date')dateinf : ElementRef;
  @ViewChild('Wicket')WicketTypeinf:ElementRef;
  @ViewChild('possibleRuns')possibleRunsinf:ElementRef;
  @ViewChild('Catch') CatchBYType:ElementRef;
  @ViewChild('Ball')ballinf :ElementRef;
  @ViewChild('Description')descriptioninf :ElementRef;
  @ViewChild('Overs')Oversinf :ElementRef;
  
  t1;
  t2;
  ball=0;
  over=0;
  comm;
  description;
  public showWicket:boolean = false;
  public showCatchBy:boolean = false;
  public buttonName:any = 'ShowType';
  public buttonName1:any = 'Show';
  
  
  
  
  onSelectOfPossibility()
  {
    this.t1=((<HTMLInputElement>this.possibleRunsinf.nativeElement).value);
    console.log(this.t1);
    if(this.t1 == 'Wicket')
    {
      this.showWicket = true;
      
    }
    else
    {
      this.showWicket=false;
      
    }
    
  }
  
  onSelectOfWicket()
  {
    this.t2=((<HTMLInputElement>this.WicketTypeinf.nativeElement).value);
    console.log(this.t2);
    if(this.t2=='Catch' || this.t2=='Stumping') {
  
      this.showCatchBy = true;
      
    } else {
      this.showCatchBy = false;
      
    }
    
  }
  onAddScoreClick()
  {
    if(
      this.ball<6
      ){
      this.ball++;
      }
      else if(
      this.ball=6
      ){
      this.ball=0;
      this.over++;
     
      this.comm.addComentary((<HTMLInputElement>this.ballinf.nativeElement).value,
      (<HTMLInputElement>this.descriptioninf.nativeElement).value,
      (<HTMLInputElement>this.Oversinf.nativeElement).value
      );

  }

}

}
