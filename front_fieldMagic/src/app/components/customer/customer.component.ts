// import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

 import { Customer } from '../../customer';
//   Customer = new Customer();

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  Customer: any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.getCustomersdata();
  }
  getCustomersdata() {
    this.dataService.getData().subscribe(res => {
      this.Customer = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.Customer).subscribe(res => {
      this.getCustomersdata();
    });
    }
    deleteData(id: any){
      this.dataService.deleteData(id).subscribe(res => {
        this.getCustomersdata();
      });
    }
  }
