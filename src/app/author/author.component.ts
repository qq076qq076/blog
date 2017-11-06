import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  data_list: Array<any>;

  constructor(private dataService: DataService) {
    dataService.Getdata('assets/data/data.json', '0')
      .then(res => this.data_list = res['author']);
  }

  ngOnInit() {
  }

}
