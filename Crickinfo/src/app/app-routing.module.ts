import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { AdminComponent } from './admin/admin.component';
import { ComentaryComponent } from './comentary/comentary.component';
import { AdminFormComponent } from './Admin/admin-form/admin-form.component';
import { AdminTeamComponent } from './Admin/admin-team/admin-team.component';
import { AdminSummaryComponent } from './Admin/admin-summary/admin-summary.component';


const routes: Routes = [{ path: '', redirectTo: 'header', pathMatch: 'full' },
{

  path:'admin',
  component:AdminComponent,
  children:[
    {path:'adminform',component:AdminFormComponent},
    {path:'adminTeam',component:AdminTeamComponent},
    {path:'adminsummary',component:AdminSummaryComponent}
    
  ]
},
{
  path:'scorecard',
  component:ScorecardComponent
},
{
  path:'comentary',
  component:ComentaryComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }