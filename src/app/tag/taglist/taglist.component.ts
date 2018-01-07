import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '@Service/data.service';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaglistComponent implements OnInit {
  id: string;
  post_list: Array<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService) { }

    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      const uri = '/tag/index';
      const searchData = { id : this.id};
      this.dataService.Get(uri, searchData)
        .then((res) => this.post_list = res['data']);
    }

}
