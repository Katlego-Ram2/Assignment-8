import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  saveData() {
      const user = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        address: {
          town: this.town,
          suburb: this.suburb,
          street: this.street,
          code: this.code
        },
        password: this.password
      };
    
      const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(user);
      // Check if the user  exists
      const existingUser = users.find((user: any) => user.email === this.email);
      if (existingUser) {
        alert('User already exist Login');
        return;
      }
    
      // Add user to the array
      users.push(user);
    
      localStorage.setItem('users', JSON.stringify(users));
    
      alert('User Registered Successful');
      this.router.navigate(['/login']);
    }
    
  
  
    isFormValid(): boolean {
      return !!this.name && !!this.surname && !!this.password && !!this.confirmPassword && !!this.email && !!this.phone && !!this.securityQuestion && !!this.answer;
    }
    goToLogin(){
      this.router.navigate(['/login'])
    }
  
}