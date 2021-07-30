import { Component, OnInit } from '@angular/core';
import { Content, Timeline } from '@model/timeline';
import { TimelineService } from '@services/timeline.service';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
    timeline?: Timeline;
    content?: Content;
    timelineData: any[] = [];
    constructor(private timelineservice: TimelineService) { }

    ngOnInit(): void {
        this.getTimeline();
    }
    getTimeline(): void {
        this.timelineservice.getTimeline().subscribe((data) => {
            this.timeline = data;
            this.timelineData = this.timeline!.content.slice(0);
        });
    }
}
