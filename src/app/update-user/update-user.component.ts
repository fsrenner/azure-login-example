import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SuccessDialogComponent, SuccessDialogModel } from '../_shared/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  users: User[];
  user: User;
  submitted = false;
  error = '';
  httpError = '';
  httpMessage = '';
  updateForm: FormGroup;
  selectForm: FormGroup;
  selectedUser: number;

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.selectForm = this.fb.group({
      selectedUser: ['']
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => {
        this.httpError = error.message;
        this.httpMessage = error.error.message;
      }
    );
  }

  buildSelectedUserForm() {
    this.user = this.users.find(user => user.id === this.selectedUser);
    this.updateForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      emailAddress: [this.user.emailAddress, [Validators.required, Validators.email]],
      aadId: [this.user.aadId]
    });
  }

  updateUser() {
    this.submitted = true;
    const postParams = this.updateForm.value;
    if (postParams.aadId === '') {
      postParams.aadId = null;
    }
    console.table(postParams);
    if (!postParams.firstName || !postParams.lastName || !postParams.emailAddress) {
      this.error = 'Please resolve the missing values before you submit';
    } else {
      this.userService.updateUser(this.selectedUser, postParams).subscribe(
        user => {
          this.showUpdateSuccess(user);
        },
        error => {
          this.httpError = error.message;
          this.httpMessage = error.error.message;
        }
      );
    }
  }

  showUpdateSuccess(user: User): void {
    const message = `Successfully updated: ${user.firstName} ${user.lastName}`;
    const title = 'User Updated';
    const dialogData = new SuccessDialogModel(title, message, user);
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      maxWidth: '600px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['users']);
    });
  }

}
