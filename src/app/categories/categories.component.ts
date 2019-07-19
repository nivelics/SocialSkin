import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public stringSlug: string;

  constructor(private route: ActivatedRoute, ) {
    this.stringSlug = this.route.snapshot.paramMap.get("slug");

  }

  ngOnInit() {
  }

}
