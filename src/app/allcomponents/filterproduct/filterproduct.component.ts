import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/allservices/myservice.service';

@Component({
  selector: 'app-filterproduct',
  templateUrl: './filterproduct.component.html',
  styleUrls: ['./filterproduct.component.css']
})
export class FilterproductComponent implements OnInit {
   f:any=''
    pfilter:any=[]
      constructor(private mydata:MyserviceService,private rec:ActivatedRoute) { 
  
    
      }
    
      ngOnInit(): void {
//this.f = this.rec.snapshot.paramMap.get("name")

        this.rec.paramMap.subscribe((a)=>{
            this.f=a.get("name")||''
            this.mydata.user().subscribe((data:any)=>{
    
                this.pfilter=data;
                this.pfilter=this.pfilter.filter((item:any)=>item.productCategory==this.f)
                
                   })
            
        })
         
    //     this.name=this.rec.snapshot.paramMap.get("name")
        
        





      }
    
    }
    