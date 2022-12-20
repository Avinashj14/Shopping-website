import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/allservices/myservice.service';

@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {
    pdata:any;
    constructor(private mydata:MyserviceService,private rec:ActivatedRoute) { 
    
    let id=this.rec.snapshot.paramMap.get("name");
    this.mydata.getProduct(id).subscribe((data)=>{                         
        this.mydata.addCart(data).subscribe((dt)=>{

          
            this.mydata.cart().subscribe((data:any)=>{
                this.pdata=data              
            })
        })
    })

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

