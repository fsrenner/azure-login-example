import { SuccessDialogComponent, SuccessDialogModel } from './../_shared/success-dialog/success-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../_shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
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
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.selectedUser = null;
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

  setSelectedUser() {
    this.user = this.users.find(user => user.id === this.selectedUser);
  }

  confirmDelete() {
    const message = `Are you sure you want to delete user: ${this.user.firstName} ${this.user.lastName} (${this.user.id})`;
    const title = 'Delete User Confirmation';
    const dialogData = new ConfirmDialogModel(title, message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '600px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(`Delete user ${this.selectedUser}? ${dialogResult}`);
      if (dialogResult) {
        this.deleteUser();
      }
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.selectedUser).subscribe(
      user => {
        console.log(`deleted user: ${JSON.stringify(user)}`);
        this.showDeleteSuccess(user);
      },
      error => {
        this.httpError = error.message;
        this.httpMessage = error.error.message;
      }
    );
  }

  showDeleteSuccess(user: User): void {
    const message = `Successfully deleted: ${this.user.firstName} ${this.user.lastName}`;
    const title = 'User Deleted';
    const dialogData = new SuccessDialogModel(title, message, user);
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      maxWidth: '600px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(() => this.ngOnInit());
  }
}
