import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-customer',
  templateUrl: './map.component.html',
  providers: [ ]
})

export class MapComponent implements OnInit {

  currentUser: any;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.currentUser = this.user.getCurrentUser();
  }
}
