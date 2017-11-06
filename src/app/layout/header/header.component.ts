import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nav_list: Array<any>;

  constructor() { }

  ngOnInit() {
    this.nav_list = [
      { name: '文章', link: '/layout/post' },
      { name: '分類', link: '' },
      { name: '關於我', link: '/layout/author' }
    ];
  }

}
