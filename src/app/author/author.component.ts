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
    // dataService.Getdata('assets/data/data.json', '0')
    //   .then(res => this.data_list = res['author']);

    const search_data = { 'table': 'author' };
    datasvc.GetApidata(search_data)
      .then(res => { this.prepare(res); });
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
