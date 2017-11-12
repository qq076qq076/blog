import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nav_list: Array<any>;
  need_fixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(number);
    this.need_fixed = (number > 60);
  }
  constructor() {}

  ngOnInit() {
    this.nav_list = [
      { name: '文章', link: '/layout/post' },
      { name: '分類', link: '/layout/tag' },
      { name: '關於我', link: '/layout/author' }
    ];
  }
}
