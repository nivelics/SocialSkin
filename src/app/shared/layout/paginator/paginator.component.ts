import { Component, OnInit, Input } from '@angular/core';
import { FinalistService } from '../../services-modules/finalist/finalist.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  public meals: String[];
  page: number = 1;

  constructor(private finalistService: FinalistService) {
  }

  ngOnInit() {
    this.meals = this.finalistService.getDataFinalist();
  }

  filter(params: string) {
    this.meals = this.getFilteredByKey(this.finalistService.getDataFinalist(), 'type', params);
    this.page=1;
    console.log(this.meals, 'data');
  }

  getFilteredByKey(array, key, value): any {
    return array.filter(function (e) {
      return e[key] == value;
    });
  }

}
