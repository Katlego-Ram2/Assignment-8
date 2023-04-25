import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string = '';
  surname: string = '';
  email: string = '';
  town: string = '';
  suburb: string = '';
  street: string = '';
  code: string = '';
  password: string = '';
  confirmPassword: string="";
  phone: string="";
  securityQuestion: string=""; 
  answer: string="";

  users: any[] = [];
  loggedUser:any;
  constructor() { }


  display():void{
   
  }

  ngOnInit(): void {
    this.loggedUser=localStorage.getItem("loggedInUser")
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    this.users=users;
    console.log(this.users);
    
 
    
  
  }

}
