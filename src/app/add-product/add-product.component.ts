import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private httpClient : HttpClient,
    private router : Router
  ) { }
  isSumit = false;
  product : any;
  purpose: any;
  amount : any;
  date : any;
  userId : any
  ngOnInit(): void {
  }
  Submit(){
    this.isSumit = true;
    if(this.product && this.purpose && this.amount && this.date){
      this.userId = window.localStorage.getItem('userId');
      let formObj = {
        userId: parseInt(this.userId),
        itemName: this.product,
        description: this.purpose,
        amount: this.amount,
        createdDate: this.date
    }
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
      this.httpClient.post(`https://fifthfloor.herokuapp.com/insertProductDetails`,formObj,{headers : headers }).subscribe((details : any)=>{
        if(details){
          this.isSumit = false;
          this.router.navigate(['/home']);
        }
        else{
          this.isSumit = false;
          this.router.navigate(['/home']);
        }
      });
    }
    else{
      this.isSumit = false;
      alert("fill all details");
    }
  }
}
