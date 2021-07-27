import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderList } from 'src/app/model/headerList';

@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    apiURL = 'https://api-front-end-challenge.buildstaging.com/api/header';

    constructor(private http: HttpClient) { }
    /* get list from API */
    getHeaderList(): Observable<any> {
        return this.http.get<HeaderList[]>(
            'https://api-front-end-challenge.buildstaging.com/api/header',
        );
    }

}
