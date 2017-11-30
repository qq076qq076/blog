import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  user = {
    account: null,
    password: null
  };

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private DataSvc: DataService
  ) {}

  ngOnInit() {}

  logIn(): void {
    const uri = '/user/login';
    this.DataSvc.Post(uri, this.user)
    .then((res) => {

    });
  }
}
