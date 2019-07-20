//import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PgService } from '../pg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pg-details',
  templateUrl: './pg-details.component.html',
  styleUrls: ['./pg-details.component.css']
})
export class PgDetailsComponent implements OnInit {
  selectedPg = {};

  constructor(
    private pgService: PgService,
    private activedRoute: ActivatedRoute) {

    this.activedRoute.queryParams.subscribe(params => {
      const id = params['id'];
      // console.log(`selected movie id: ${id}`);
      this.pgService
        .getPgDetails(id)
        .subscribe(response => {
          const result = response.json();
          this.selectedPg = result.data;
        });
    });
  }

  ngOnInit() {
  }

}
