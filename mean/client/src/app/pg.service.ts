import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable()
export class PgService {

  url = 'http://localhost:3000/RakshPgFinder';

  constructor(private http: Http) {

  }

  getPg() {
    return this.http.get(this.url);
  }

  getPgDetails(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  addPg(id: string, address: string, location: string, nearby: string,
      Type: string, cost: string, thumbnail: string,
      facilities: string, gender: string, email: string, password: string) {

      const body = {
        id: id,
        address: address,
        location: location,
        nearby: nearby,
        Type: Type,
        cost: cost,
        thumbnail: thumbnail,
        facilities: facilities,
        gender: gender,
        email: email ,
        password: password

      };

      const header = new Headers({ 'Content-Type': 'application/json' });
      const requestOption = new RequestOptions({ headers: header });

      return this.http.post(this.url, body, requestOption);
  }

  updatePg() {

  }

  deletePG(id: number) {
    console.log('Inside dlt service', id);
    return this.http.delete(this.url + '/' + id);
  }

}
