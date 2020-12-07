import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  submitted = false;
  error = '';
  httpError = '';
  httpMessage = '';
  addForm: FormGroup;
  user: User;

  constructor(public fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      aadId: ['']
    });
  }

  addUser() {
    this.submitted = true;
    const postParams = this.addForm.value;
    if (postParams.aadId === '') {
      postParams.aadId = null;
    }
    console.table(postParams);
    if (!postParams.firstName || !postParams.lastName || !postParams.emailAddress) {
      this.error = 'Please resolve the missing values before you submit';
    } else {
      this.userService.addUser(postParams).subscribe(
        user => {
          this.user = user;
          console.log(user);
        },
        error => {
          this.httpError = error.message;
          this.httpMessage = error.error.message;
        }
      );
    }
  }

}
