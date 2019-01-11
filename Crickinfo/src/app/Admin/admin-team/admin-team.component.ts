import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayerlistService} from 'src/app/services/playerlist.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-admin-team',
    templateUrl: './admin-team.component.html',
    styleUrls: ['./admin-team.component.css']
})
export class AdminTeamComponent implements OnInit {
tm;
p1;
p2;
record=1;
playernames:Array<string>=[];
playernames1:Array<string>=[];
@ViewChild('playername1')team1inf :ElementRef;
@ViewChild('playername2')team2inf :ElementRef;

constructor(
 adminService:AdminService,
  private playerls1:PlayerlistService,
  private router:Router,
  private route : ActivatedRoute
  )
   { 
     this.tm = adminService.teams;
  }

ngOnInit() {
}

onsubmitclick()
{
this.record++;
if(this.record<=12){


this.p1=(<HTMLInputElement> this.team1inf.nativeElement).value;
this.playernames.push((<HTMLInputElement> this.team1inf.nativeElement).value);
}
}

onsubmitclick1()
{
this.p2=(<HTMLInputElement> this.team2inf.nativeElement).value;
this.playernames1.push((<HTMLInputElement> this.team2inf.nativeElement).value);
}

onFinalClick()
{
this.playerls1.addPlayerList(this.playernames);
}
onDeleteClick(){
this.playernames.pop();
}
onStartClick()
{
    this.router.navigate(['/admin/adminsummary'], { relativeTo: this.route })
}
onFinalClick1()
{
    this.playerls1.addPlayerList(this.playernames);
}
onDeleteClick1()
{
    this.playernames.pop();
  }
}