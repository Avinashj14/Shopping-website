import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/app/allservices/myservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   pdata:any;
    constructor(private mydata:MyserviceService,private rec:ActivatedRoute,private route:Router) { 
    
   if(this.mydata.userstatus==false){
    this.route.navigate(['/login'])
   }
   else{
    let id=this.rec.snapshot.paramMap.get("name");
    this.mydata.getProduct(id).subscribe((data)=>{                         
        this.mydata.addCart(data).subscribe((dt)=>{

          
            this.mydata.cart().subscribe((data:any)=>{
                this.pdata=data              
            })
            3.
        })
    })
   }

  }
  delete(i:any){

    console.log(i)
    this.mydata.remove(i).subscribe((data:any)=>{  
        
        this.ngOnInit() 
        })    
}

  ngOnInit(): void { 
      
    this.mydata.cart().subscribe((data:any)=>{
        this.pdata=data              
    })  
     
   

  }

}

