import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showText: false;
  public parmsModuleSlug: string;

  constructor(private route: ActivatedRoute) {
    this.parmsModuleSlug = this.route.snapshot.paramMap.get("home");
  }

  ngOnInit() {
  }

}
