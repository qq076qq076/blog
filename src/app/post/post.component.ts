import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  article: Array<any>;

  constructor(private datasvc: DataService) {
    datasvc.Getdata('assets/data/data.json', '0')
      .then(res => { this.article = res['article']; console.log(res); });
  }

  ngOnInit() {

  }

}
