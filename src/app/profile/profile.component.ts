import { GraphService } from './../_services/graph.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  user: User;
  error: any;
  message: string;

  constructor(
    private graphService: GraphService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getProfile();
    this.getAPIProfile();
  }

  getProfile() {
    this.graphService.getAADUserProfile().subscribe(
      profile => this.profile = profile,
      error => this.error = error
    );
  }

  getAPIProfile() {
    this.userService.login().subscribe(
      user => {
        this.user = user;
        console.log(user);
      },
      error => {
        this.error = error.message;
        this.message = error.error.message;
      }
    );
  }

}
