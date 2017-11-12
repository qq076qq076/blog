import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
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
    const search_data = { table: 'post', id: this.id };
    this.datasvc.GetApidata(search_data).then(res => {
      this.post_data = res[0];
      console.log(res);
    });
  }
}
