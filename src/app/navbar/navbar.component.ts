import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  imgUrl : any;
  userName : any;
  constructor(private router : Router) { 
    
  }

  ngOnInit(): void {
    this.imgUrl = window.localStorage.getItem('img');
    this.userName = window.localStorage.getItem('name');
  }
  logout(){
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('img');
    this.router.navigate(['/login']);
  }

}
