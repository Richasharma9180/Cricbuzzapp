import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adm;
  constructor(private router:Router,private route:ActivatedRoute ) 
  { 
    // this.adm=adminSevice.tasks
  }

  ngOnInit() {
  }
  onStartOfNewMatchClicked()
{
  this.router.navigate(['/admin/adminform'], { relativeTo: this.route })
}    


}
