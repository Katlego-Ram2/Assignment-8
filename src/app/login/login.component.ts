import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
 
  constructor(private router: Router) {}
 

  ngOnInit(): void {
  }

    login(): void { 

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((user: any) => user.email === this.email && user.password === this.password);
  
      if (user) {
       
        localStorage.setItem('loggedInUser', user.name);
        console.log(user.name)
        alert("User Logged In Successful");
        this.router.navigate(['/home']);
      } else {
        alert('User doesn’t exist');
        this.router.navigate(['/register']);
      }
    }
    goToRegister():void{
      this.router.navigate(['/register']);
    }
  }