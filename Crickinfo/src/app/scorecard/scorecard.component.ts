import { Component, OnInit } from '@angular/core';
import { PlayerlistService} from 'src/app/services/playerlist.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  play;
  ngOnInit() {
  }


tm1;

 

  constructor(adminService:AdminService,
    private playerls1:PlayerlistService,
    private router:Router,
    private route : ActivatedRoute) {

      this.tm1 = adminService.teams;
      this.play=playerls1.playernames1;
    this.play=playerls1.playernames2;
  }

}
