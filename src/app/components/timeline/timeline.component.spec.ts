import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
    let component: TimelineComponent;
    let fixture: ComponentFixture<TimelineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TimelineComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('check whether getTimeline() is called and observable value checks', async(() => {
        spyOn(component, 'getTimeline').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.getTimeline).toBeTruthy();
        expect(component.getTimeline).toHaveBeenCalled();
    }));
});
