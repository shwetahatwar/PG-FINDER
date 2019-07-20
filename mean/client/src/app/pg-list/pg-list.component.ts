//import { Component, OnInit } from '@angular/core';
import { PgService } from '../pg.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pg-list',
  templateUrl: './pg-list.component.html',
  styleUrls: ['./pg-list.component.css']
})
export class PgListComponent implements OnInit {

  pgs = [];

  // dependancy injection
  constructor(
    private router: Router,
    private pgService: PgService) {

      this.refreshPgList();
  }

  refreshPgList() {
    this.pgService
      .getPg()
      .subscribe(response => {
        const result = response.json();
       //alert(result.data);

        this.pgs = result.data;
      });
  }

  ngOnInit() {
  }

  onDetails(pg) {
    this.router.navigate(['/pg-details'], { queryParams: { id: pg.id } });
  }

  onDelete(pg) {
     const answer = confirm('Are you sure you want to delete ' +  pg.address + ' ?');
    if (answer) {
      console.log('inside delete', pg.id);
      this.pgService
        .deletePG(pg.id)
        .subscribe(response => {
          const result = response.json();
          console.log(result);
          this.refreshPgList();
        });
    }
  }

}
