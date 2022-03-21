import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details : any;
  userId : any
  constructor(
    private httpClient : HttpClient,
    private route : ActivatedRoute,
    private router : Router,
    private commonService : CommonService
  ) { }

  ngOnInit(): void {

    this.userId = window.localStorage.getItem('userId');
    if(this.userId){
      let id;
      this.route.params.subscribe(params => {
        id = params['id'];
      });
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
        this.httpClient.get(`https://fifthfloor.herokuapp.com/userDetails/${id}`,{ 'headers': headers }).subscribe((details : any)=>{
        this.details = details;
        });
    }
    else{
      this.router.navigate(['/login'])
    }
  }

  padTo2Digits(num:any) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date:any) {
    return [
      date.getFullYear(),
      this.padTo2Digits(date.getMonth() + 1),
      this.padTo2Digits(date.getDate()),
    ].join('-');
  }
  
  updateOrDelete(detail:any){
    console.log(detail);
    this.commonService.formObj = detail;
    window.localStorage.setItem('obj',JSON.stringify(detail));
    this.router.navigate(['/addForm/update']);
    // alert("comming soon!");
  }
  delete(details:any){
    let isDelete = window.confirm("Are you sure you want to delete...!");
    if(isDelete){
      let obj = {
        id : details.id,
      }
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
        this.httpClient.post(`https://fifthfloor.herokuapp.com/deleteById`,obj,{ 'headers': headers }).subscribe((details : any)=>{
          if(details){
            this.router.navigate(['/home']);
          } 
        });
    }
  }

}
