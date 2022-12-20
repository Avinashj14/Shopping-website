import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({ providedIn: 'root'})
export class MyserviceService {
userstatus=false;
username="";
    allProducts:any=" http://localhost:3000/products"
    constructor(private http:HttpClient) { }
  
  
  user(){
      return this.http.get(this.allProducts)
        }
        cart(){
            return this.http.get("http://localhost:3000/cart") 
        }


        getProduct(id:any)   //1 get a single product by id
        {
            return this.http.get(`http://localhost:3000/products/${id}`)
        }
  
    addCart(data:any)// 2. add that product
    {

        console.log("Data is =  "+this.username)
        let dt={"name":data.productName,"amount":data.amount,"image":data.image ,"uname":this.username}
        return this.http.post(`http://localhost:3000/cart`,dt)
    }


    remove(i:any){
        return this.http.delete(`http://localhost:3000/cart/${i}` )
          }

newUser(nu:any){
    
    return this.http.post(`http://localhost:3000/userinfo`,nu)

}
login(){
    return this.http.get("http://localhost:3000/userinfo")
}
      }   