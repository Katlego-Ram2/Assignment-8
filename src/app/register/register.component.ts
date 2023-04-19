import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
  constructor() { }

  ngOnInit(): void {
  }
  saveData(){
    let name=document.getElementById("");
    let surname=document.getElementById("");
    let email=document.getElementById("");
   
    let town=document.getElementById("");
    let suburb=document.getElementById("");
    let street=document.getElementById("");
    let code=document.getElementById("");
    let password=document.getElementById("");

  
    let user = {
      name: name,
      surname: surname,
      email: email,
      address: {
      town: town,
      suburb: suburb,
      street: street,
      code: code
      },
      password: password
      }
      
  }

}
