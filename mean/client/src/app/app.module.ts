import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PgService } from './pg.service';

import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { PgDetailsComponent } from './pg-details/pg-details.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AddPgComponent } from './add-pg/add-pg.component';
import { PgListComponent } from './pg-list/pg-list.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPgComponent,
    PgListComponent,
    AboutComponent,
    HelpComponent,
    PgDetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'pg-add', component: AddPgComponent, canActivate: [UserService] },
      { path: '', component: PgListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'help', component: HelpComponent },
      { path: 'pg-details', component: PgDetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ])
  ],
  providers: [
    PgService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
