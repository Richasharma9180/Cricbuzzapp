import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  @ViewChild('team1')team1inf :ElementRef;
  @ViewChild('team2')team2inf :ElementRef;
  @ViewChild('toss')tossinf :ElementRef;
  @ViewChild('date')dateinf : ElementRef;
  @ViewChild('overs')oversinf :ElementRef;

t1;
t2;
constructor(private AdminService:AdminService, private router: Router, private route: ActivatedRoute) {
  
}

ngOnInit() {

}

onDefineButtonClicked(){
  this.AdminService.score(
  (<HTMLInputElement>this.team1inf.nativeElement).value,
  (<HTMLInputElement>this.team2inf.nativeElement).value,
  (<HTMLInputElement>this.tossinf.nativeElement).value,
  (<HTMLInputElement>this.dateinf.nativeElement).valueAsDate,
  (<HTMLInputElement>this.oversinf.nativeElement).valueAsNumber
  
  )
  
  this.router.navigate(['/admin/adminTeam'],{relativeTo:this.route})
  }
  
  myfun()
  {this.t1=(<HTMLInputElement>this.team1inf.nativeElement).value;
  this.t2=(<HTMLInputElement>this.team2inf.nativeElement).value;
  }
  }