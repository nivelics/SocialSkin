import { Component, OnInit } from '@angular/core';
import { PaginatorComponent } from '../paginator/paginator.component';
import { FinalistService } from '../../services-modules/finalist/finalist.service';

@Component({
  selector: 'app-lateral-nav',
  templateUrl: './lateral-nav.component.html',
  styleUrls: ['./lateral-nav.component.scss']
})
export class LateralNavComponent implements OnInit {

  status: boolean = false;
  private finalistService: FinalistService = new FinalistService;
  public objectFilter: PaginatorComponent = new PaginatorComponent(this.finalistService);
  clickEvent() {
    this.status = !this.status;
  }

  constructor() { }

  ngOnInit() {
  }

  filterFinalist(typeFilter: string) {
    this.objectFilter.filter(typeFilter)
  }

}
