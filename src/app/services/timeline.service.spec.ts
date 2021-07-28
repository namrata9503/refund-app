import { async, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Content } from 'src/app/model/timeline';
import { TimelineService } from './timeline.service';

describe('TimelineService', () => {
    let service: TimelineService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: service, useClass: TimelineService }],
            imports: [RouterTestingModule, HttpClientTestingModule],
        }).compileComponents();

        http = TestBed.inject(HttpTestingController);
        service = TestBed.inject(TimelineService);
    });

    afterEach(() => {
        http.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('mock the HTTP get timeline service', async(() => {
        const mockTimeline = [
            {
                id: 545,
                cardDate: 1585710000000,
                cardType: 'EXPENSE',
                status: 'PENDING',
                currencySymbol: 'R$',
                amountTotal: 222.22,
                notes: 'sadasd',
            },
        ];
        service.getTimeline().subscribe((data) => {
            const p = data.filter((sidebar: Content) => sidebar.id === 545);
            expect(p[0].cardDate).toEqual(1585710000000);
            expect(p[0].cardType).toEqual('EXPENSE');
            expect(p[0].status).toEqual('PENDING');
            expect(p[0].currencySymbol).toEqual('R$');
            expect(p[0].amountTotal).toEqual(222.22);
            expect(p[0].notes).toEqual('sadasd');
            console.log(mockTimeline);

            expect(data).toEqual(mockTimeline);
        });
        const req = http.expectOne('https://api-front-end-challenge.buildstaging.com/api/timeline');
        expect(req.request.method).toBe('GET');
        req.flush(mockTimeline);
    }));
});
