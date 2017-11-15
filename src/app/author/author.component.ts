import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  data_list: Array<any>;

  constructor(private datasvc: DataService) {
    const search_data = { };
    const uri = '/author/index';
    this.datasvc.Get(uri, search_data)
    .then(res => this.prepare(res['data']));
  }

  ngOnInit() {
  }

  prepare(res) {
    res.forEach((val, key) => {
      res[key]['list'] = res[key]['list'].split('//');
    });
    this.data_list = res;
  }
}
