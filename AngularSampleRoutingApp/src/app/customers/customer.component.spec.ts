// app.component.spec.ts
import { TestBed, async } from '@angular/core/testing'; // 1
import { CustomerComponent } from './customer.component';
import { GridComponent } from '../shared/grid.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

describe('CustomerComponent', () => { 
  beforeEach(async(() => { // 3
    TestBed.configureTestingModule({
       imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            AppRoutingModule
       ],
      declarations: [
        CustomerComponent, GridComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => { 
    const fixture = TestBed.createComponent(CustomerComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('CustomerCode,CustomerName,CustomerAddress should be added successfully', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#txtCustomerCode').value = "S009";
    compiled.querySelector('#txtCustomerCode').dispatchEvent(new Event('input'));
    fixture.detectChanges();
    compiled.querySelector('#txtCustomerName').value = "ishita";
    compiled.querySelector('#txtCustomerName').dispatchEvent(new Event('input'));
    fixture.detectChanges();
    compiled.querySelector('#txtCustomerAddress').value = "Stockport";
    compiled.querySelector('#txtCustomerAddress').dispatchEvent(new Event('input'));
    fixture.detectChanges();
    compiled.querySelector('#btnAdd').click();
    fixture.detectChanges();
    let html = compiled.querySelector("#mytable").innerHTML;
    expect(html.indexOf("S009")>-1).toBeTrue();
    expect(html.indexOf("ishita")>-1).toBeTrue();
    expect(html.indexOf("Stockport")>-1).toBeTrue();
});

});