import { Component, OnInit } from '@angular/core';
import { DataService } from '@Service/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  article: Array<any>;

  constructor(private datasvc: DataService) {
  }

  ngOnInit() {
    const search_data = { };
    const uri = '/post/index';
    this.datasvc.Get(uri, search_data)
        .then(res => this.article = res['data']);
  }

}
