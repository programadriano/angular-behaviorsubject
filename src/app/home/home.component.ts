import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from "@angular/router";

import { DataService } from '../services/data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: User;

  constructor( private router: Router,private data: DataService) {  }

  ngOnInit() {
    this.data.currentMessage.subscribe(users => this.user = users);
    console.log(this.user);
  }

  changeName(name) {
    this.user.Name = name;
    this.data.changeMessage(this.user)
  }

  nextComponent(){
    this.router.navigate(['/about']);
  }


}
