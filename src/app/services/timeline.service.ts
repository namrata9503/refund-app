import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timeline } from 'src/app/model/timeline';

@Injectable({
    providedIn: 'root',
})
export class TimelineService {

    apiURL = 'https://api-front-end-challenge.buildstaging.com/api/header';

    constructor(private http: HttpClient) { }
    /* get list from API */
    getTimeline(): Observable<any> {
        return this.http.get<Timeline[]>(
            'https://api-front-end-challenge.buildstaging.com/api/timeline',
        );
    }
}
