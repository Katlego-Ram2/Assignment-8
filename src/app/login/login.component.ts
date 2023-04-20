import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  router: any;
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor() { }

  ngOnInit(): void {
  }

    login(): void {

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((user: any) => user.email === this.email && user.password === this.password);
  
      if (user) {
        // Set the logged in user's name in local storage for the toolbar
        localStorage.setItem('loggedInUser', user.name);
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password.');
      }
    }
  }