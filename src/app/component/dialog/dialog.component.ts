import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '@Service/data.service';

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
  error: string;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private DataSvc: DataService
  ) {}

  ngOnInit() {}

  logIn(): void {
    const uri = '/user/login';
    this.error = null;
    this.DataSvc.Post(uri, this.user).then(res => {
      console.log(res);
      if (res['http_code'] === 200) {
        localStorage['token'] = res['data']['token'];
        this.dialogRef.close();
      } else {
        this.error = res['data']['message'];
      }
    });
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
