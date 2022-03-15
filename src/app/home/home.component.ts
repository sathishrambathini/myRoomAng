import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
  const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    this.httpClient.get('https://fifthfloor.herokuapp.com/fetchAllUsers',{ 'headers': headers }).subscribe((users : any)=>{
      this.users = users;
    })
  }

}
