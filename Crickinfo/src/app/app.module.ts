import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { AdminComponent } from './admin/admin.component';
import { ComentaryComponent } from './comentary/comentary.component';
import { AdminFormComponent } from './Admin/admin-form/admin-form.component';
import { AdminSummaryComponent } from './Admin/admin-summary/admin-summary.component';
import { AdminTeamComponent } from './Admin/admin-team/admin-team.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScorecardComponent,
    AdminComponent,
    ComentaryComponent,
    AdminFormComponent,
    AdminSummaryComponent,
    AdminTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
