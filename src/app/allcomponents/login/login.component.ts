import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/app/allservices/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
alluser:any;// for all users data
ls:any;// for sign in varible
nm=""
    constructor(private mydata:MyserviceService,private rec:ActivatedRoute,private abc:Router ) { 
   this.mydata.login().subscribe(data=>{
this.alluser=data

   })
   
    }
check(n:any,p:any){
    this.alluser.forEach((element:any) => {
        if(element.email==n && element.password==p){
this.ls=true;

        }
  
    });
    if (this.ls){
        this.mydata.userstatus=true;
        console.log(this.alluser.name)
        this.mydata.username=this.alluser.n;
        this.nm=""
       
//this.abc.navigate(['/Allproducts'])
    }
    else{
        alert("Enter correct credentials")
    }


}
  ngOnInit(): void {
  }

}
