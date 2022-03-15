import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details : any;
  constructor(
    private httpClient : HttpClient,
    private route : ActivatedRoute 
  ) { }

  ngOnInit(): void {
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

  updateOrDelete(){
    alert("comming soon!")
  }

}
