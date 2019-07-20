// import { Component, OnInit } from '@angular/core';
import { PgService } from '../pg.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-pg',
  templateUrl: './add-pg.component.html',
  styleUrls: ['./add-pg.component.css']
})
export class AddPgComponent implements OnInit {
  address = '';
  location = '';
  nearby = '';
  Type = '';
  cost = '';
  thumbnail = '';
  facilities = '';
  gender = '';
  email = '';
  password = '';

  constructor(
    private router: Router,
    private pgService: PgService) { }

  ngOnInit() {
  }

  onAdd() {
    this.pgService
      .addPg(this.address, this.location, this.nearby, this.Type, this.cost, this.thumbnail, this.facilities, this.gender,this.email,this.password)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/pg-list']);
      });
  }

  onCancel() {
    this.router.navigate(['/pg-list']);
  }

}

