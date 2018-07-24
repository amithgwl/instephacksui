import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class MyserviceService {

  constructor(private http: Http) { }


  findUrl = 'http://ec2-18-191-246-179.us-east-2.compute.amazonaws.com:8080/getproducts';

  private extractJSON(res: any) {
    return res.json() || {};
  }

  //if service throws error
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getList(url?): Observable<any> {
    var finalUrl;
    if (url) {
      finalUrl = this.findUrl+'?'+url.replace(/:/g,'=').replace(/,/g,'&');
    }
    else
      finalUrl = this.findUrl;
    return this.http.get(finalUrl)
      .map(this.extractJSON)
      .catch(this.handleError);
  }

}