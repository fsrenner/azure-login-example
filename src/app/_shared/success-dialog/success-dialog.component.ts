import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent implements OnInit {
  title: string;
  message: string;
  user: User;

  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SuccessDialogModel
  ) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
    this.user = (data.user) ? data.user : null;
  }

  ngOnInit(): void {
  }

  onClose(): void {
    // Close the dialog, return false
    this.dialogRef.close();
  }

}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class SuccessDialogModel {

  constructor(public title: string, public message: string, public user?: User) {
  }
}
