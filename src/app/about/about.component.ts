import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public user: User;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(users => this.user = users);
  }

}
