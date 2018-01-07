import { Component, OnInit } from '@angular/core';
import { DataService } from '@Service/data.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  tag_data: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    const search_data = { };
    const uri = '/tag/index';
    this.dataService.Get(uri, search_data)
        .then(res => this.tag_data = res['data']);
  }

}
