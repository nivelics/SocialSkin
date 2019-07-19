import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ObjectDataHtml } from '../../models/objectDataHtml/objectDataHtml';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private urlBackend = environment.urlBackend;

  constructor(private http: HttpClient) { }

  findObjectBannerHome(typeHome: String): Observable<ObjectDataHtml> {
    return this.http.get<ObjectDataHtml>(this.urlBackend + typeHome).
      pipe(catchError((error, caught) => {
        return of(error);
      }) as any
      );
  }
}

