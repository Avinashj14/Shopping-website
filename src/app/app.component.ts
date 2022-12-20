import { Component } from '@angular/core';
import { MyserviceService } from './allservices/myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Commerce';
  constructor(private abc:MyserviceService) { }


  
  
}
