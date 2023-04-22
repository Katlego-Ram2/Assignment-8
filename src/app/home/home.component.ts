import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: string[] = [];

  constructor() { }

  ngOnInit(): void {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    this.users = storedUsers;
  }

}
