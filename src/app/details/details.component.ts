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

  updateOrDelete(detail:any){
    console.log(detail);
    this.commonService.formObj = detail;
    this.router.navigate(['/addForm/update']);
    // alert("comming soon!");
  }
  delete(details:any){
    alert("comming soon!");
  }

}
