import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class LocalStorageService {

    private storageSub = new Subject<any>()

    constructor(
        
    ) { }

    watchStorage(): Observable<any> {
        return this.storageSub.asObservable();
    }

    setItem(key: string, data: any) {
        localStorage.setItem(key, data);
        this.storageSub.next('changed');
    }

    removeItem(key) {
        localStorage.removeItem(key);
        this.storageSub.next('changed');
    }
  


}
