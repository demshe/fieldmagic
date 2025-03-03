import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { DataService } from 'src/app/service/data.service';

import { DataService } from '../../service/data.service';

import { Customer } from '../../customer';

@Component({
  selector: 'app-customer-edit',
  imports: [],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent {
  id:any;
  data:any;
  Customer = new Customer();
  
  constructor(private route:ActivatedRoute, private dataService: DataService){}
  // ngOnInit(){
  //   //console.log(this.route.snapshot.params.id);
  //   //this.id = this.route.snapshot.params.id;
  //   this.getData();
  // }
  getData(){
    this.dataService.getCustomerByID(this.id).subscribe(res => {
      this.data = res;
      this.Customer  = this.data;
    });
  }
}



