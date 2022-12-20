import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/allservices/myservice.service'; // importing the services in the  in the  dis playing components

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    pdata:any=[]; // fro all plrodu=ct which we are going to display
    constructor(private abc:MyserviceService) { }
  
    ngOnInit(): void {
      this.abc.user().subscribe((data:any)=>{
          this.pdata=data
      })



    }

}
