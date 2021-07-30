import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderList } from '@model/headerList';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    apiURL = environment.apiURL;

    constructor(private http: HttpClient) { }
    /* get list from API */
    getHeaderList(): Observable<any> {
        return this.http.get<HeaderList[]>(
            `${this.apiURL}/header`,
        );
    }

}
