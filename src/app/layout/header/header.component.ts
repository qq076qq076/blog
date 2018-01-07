import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../../component/dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogComponent]
})
export class HeaderComponent implements OnInit {
  nav_list: Array<any>;
  need_fixed = false;
  IsLogIn = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.nav_list = [
      { name: '文章', link: '/layout/post' },
      { name: '分類', link: '/layout/tag' },
      { name: '關於我', link: '/layout/author' }
    ];
  }

  logIn() {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
