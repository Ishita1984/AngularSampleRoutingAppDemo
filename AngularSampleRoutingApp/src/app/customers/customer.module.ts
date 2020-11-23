import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {FormsModule , ReactiveFormsModule} from "@angular/forms";
import {GridComponent} from "../shared/grid.component";

@NgModule({
  declarations: [
    CustomerComponent, GridComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'customers/add', component: CustomerComponent },         
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CustomerModule { }
