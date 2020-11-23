import { Component, Injector } from '@angular/core';
import {Customer} from "./customer.model";

@Component({
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerComponent {
  public pageTitle = 'Add Customer';
  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>();
  SelectCustomer(_selected:Customer){
    this.CustomerModel = _selected;
  }
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();// clear UI
  }
  hasError(typeofvalidator:string,
        controlname:string) : boolean{
          return this.CustomerModel
                .formCustomerGroup
                .controls[controlname]
                .hasError(typeofvalidator);
  }
}
