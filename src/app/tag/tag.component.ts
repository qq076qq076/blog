import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  tag_data: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    const search_data = { 'table': 'tag' };
    this.dataService.GetApidata(search_data)
      .then(res => this.tag_data = res);
  }

}
