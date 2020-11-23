/*import { TestBed, async } from '@angular/core/testing'; // 1
import { ProductListComponent } from './product-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {  HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

describe('ProductComponent', () => { 
  let mockProductService;

  beforeEach(async(() => { // 3
    
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent
      ],
      imports: [HttpClientTestingModule], 
        providers: [{provide: ProductService,    
        useValue: mockProductService
      }]
    }).compileComponents();
    mockProductService = jasmine.createSpyObj('ProductService',['getProducts']);
    mockProductService.getProducts.and.returnValue([{ productCode: "S2001","productName":"Shampoo" },{ productCode: "S2002","productName":"Soap" }]);
  }));

  it('should create the app', () => { 
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('testing getProducts()', () => {
    let products = mockProductService.getProducts();
    expect(products.length).toBe(2);
  });
});*/