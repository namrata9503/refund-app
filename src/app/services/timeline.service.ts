import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timeline } from '@model/timeline';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TimelineService {

    apiURL = environment.apiURL;

    constructor(private http: HttpClient) { }
    /* get list from API */
    getTimeline(): Observable<any> {
        return this.http.get<Timeline[]>(
            `${this.apiURL}/timeline`,
        );
    }
}
