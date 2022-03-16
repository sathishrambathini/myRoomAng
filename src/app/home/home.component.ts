import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

export interface Users{
  userName : string;
  emailId: string;
  img: string;
  password: string;
  role: string;
  spentAmount: number;
  totalAmount: number;
  userId: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users : Users[] = [];
  userId : any;
  name : any;
  constructor(
    private httpClient : HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.name = window.localStorage.getItem('name')
    this.userId = window.localStorage.getItem('userId');
    if(this.userId){
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
        this.httpClient.get('https://fifthfloor.herokuapp.com/fetchAllUsers').subscribe((users : any)=>{
          this.users = users;
        })
      }
      else{
        this.router.navigate(['/login'])
      }
    }
}
