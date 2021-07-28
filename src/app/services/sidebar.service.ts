import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sidebar } from 'src/app/model/sidebar';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {

    apiURL = 'https://api-front-end-challenge.buildstaging.com/api/header';

    constructor(private http: HttpClient) { }
    /* get list from API */
    getSidebar(): Observable<any> {
        return this.http.get<Sidebar[]>(
            'https://api-front-end-challenge.buildstaging.com/api/sidebar',
        );
    }
}
