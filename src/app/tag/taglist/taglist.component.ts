import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaglistComponent implements OnInit {
  id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

}
