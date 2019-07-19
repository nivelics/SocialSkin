import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ObjectDataHtml } from '../../models/objectDataHtml/objectDataHtml';

@Injectable()
export class ServiceDataEmiterModules {

    private _listners = new Subject<any>();

    @Output() dataModules: EventEmitter<ObjectDataHtml> = new EventEmitter();

    listen(): Observable<any> {
        return this._listners.asObservable();
    }

    sendDataMultiModuleHtml(object: ObjectDataHtml) {
        this._listners.next(object);
    }
}