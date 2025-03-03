import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }
  getData(){
    return this.httpclient.get('http://localhost:8000/api/customers/');
  }
  insertData(data:any){
    return this.httpclient.post('http://localhost:8000/api/customers/',data);
  }
  getCustomerByID(id:any){
    return this.httpclient.get('http://localhost:8000/api/customers/'+id);
  }
  updateData(id:any,data:any){
    return this.httpclient.put('http://localhost:8000/api/customers/'+id,data);
  }
  deleteData(id:any) {
    return this.httpclient.delete('http://localhost:8000/api/customers/'+id);
  }
}
