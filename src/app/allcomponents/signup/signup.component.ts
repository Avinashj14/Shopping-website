import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from 'src/app/allservices/myservice.service';
import {FormBuilder,FormGroup} from '@angular/forms'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

        constructor(private mydata:MyserviceService,private rec:ActivatedRoute,private abc:Router ,private formBuilder:FormBuilder) { 
  
    }


nu(n:any,e:any,p:any){
    let dt={"name":n,"email":e,"password":p}
    this.mydata.newUser(dt).subscribe(data=>{

    })
this.abc.navigate(['/login'])
}

  ngOnInit(): void {
  
  
}
}