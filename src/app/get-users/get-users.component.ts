import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  users: User[];
  error: any;
  message: string;
  displayColumns: string[] = ['id','firstName', 'lastName', 'emailAddress', 'aadId', 'createdAt', 'updatedAt'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => {
        this.error = error.message;
        this.message = error.error.message;
      }
    );
  }

}
