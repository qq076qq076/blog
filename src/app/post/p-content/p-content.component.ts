import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '@Service/data.service';
import { ContentType } from './content-class';

@Component({
  selector: 'app-p-content',
  templateUrl: './p-content.component.html',
  styleUrls: ['./p-content.component.scss']
})
export class PContentComponent implements OnInit {
  post_data: ContentType = new ContentType();
  id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datasvc: DataService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const search_data = {id: this.id };
    const uri = '/post/index';
    this.datasvc.Get(uri, search_data)
        .then(res => this.post_data = res['data']);
  }
}
