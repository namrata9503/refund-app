import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sidebar } from '@model/sidebar';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {

    apiURL = environment.apiURL;

    constructor(private http: HttpClient) { }
    /* get list from API */
    getSidebar(): Observable<any> {
        return this.http.get<Sidebar[]>(
            `${this.apiURL}/sidebar`,
        );
    }
}
