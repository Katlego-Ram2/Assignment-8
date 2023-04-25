import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsServiceService {
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
   getdata():void{
    
 }
  constructor() { }
}
