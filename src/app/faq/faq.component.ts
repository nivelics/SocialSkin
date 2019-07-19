import { Component, OnInit } from '@angular/core';
import { FaqService } from '../shared/services-modules/faq/faq.service';
import { ObjectDataHtml } from '../shared/models/objectDataHtml/objectDataHtml';
import { ServiceDataEmiterModules } from '../shared/services/serviceDataEmiterModules/serviceDataEmiterModules.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public objectHtml: ObjectDataHtml = new ObjectDataHtml();;
  public stringSlug: String;

  constructor(private route: ActivatedRoute, private serviceDataEmiterModules: ServiceDataEmiterModules, private faqService: FaqService) {
    this.stringSlug = this.route.snapshot.paramMap.get("slug");
  }

  ngOnInit() {
    this.getDataHtmlFaq();
  }

  getDataHtmlFaq() {
    this.faqService.findDataFaqServices(this.stringSlug + '/faq').subscribe(response => {
      this.objectHtml = response['result'];
      this.objectHtml.withMenu = true;
      this.serviceDataEmiterModules.sendDataMultiModuleHtml(this.objectHtml);
    }, (error: any) => {
      //integrar log de auditoria para los errores
      console.log(error);
    })
  }

}
