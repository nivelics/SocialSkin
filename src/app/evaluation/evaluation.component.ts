import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  public stringSlug: String;

  constructor(private route: ActivatedRoute) {
    this.stringSlug = this.route.snapshot.paramMap.get("slug");
  }

  ngOnInit() {
  }

}
