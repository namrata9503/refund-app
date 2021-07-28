import { async, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Content } from 'src/app/model/sidebar';
import { SidebarService } from './sidebar.service';

describe('SidebarService', () => {
    let service: SidebarService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: service, useClass: SidebarService }],
            imports: [RouterTestingModule, HttpClientTestingModule],
        }).compileComponents();

        http = TestBed.inject(HttpTestingController);
        service = TestBed.inject(SidebarService);
    });

    afterEach(() => {
        http.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('mock the HTTP get sidebar service', async(() => {
        const mockSidebar = [
            {
                accountabilityId: 757,
                currency: {
                    symbol: 'ARS$',
                    name: 'Argentine peso',
                },
                returned: 0,
                balance: 0,
                received: 0,
                declared: 123213.21,
                accountabilityStatus: 'OPEN',
            },
        ];
        service.getSidebar().subscribe((data) => {
            const p = data.filter((sidebar: Content) => sidebar.accountabilityId === 757);
            expect(p[0].accountabilityStatus).toEqual('OPEN');
            expect(p[0].currency.name).toEqual('Argentine peso');
            expect(p[0].currency.symbol).toEqual('ARS$');
            expect(p[0].balance).toEqual(0);
            expect(p[0].returned).toEqual(0);
            expect(p[0].received).toEqual(0);
            expect(p[0].declared).toEqual(123213.21);
            console.log(mockSidebar);

            expect(data).toEqual(mockSidebar);
        });
        const req = http.expectOne('https://api-front-end-challenge.buildstaging.com/api/sidebar');
        expect(req.request.method).toBe('GET');
        req.flush(mockSidebar);
    }));
});
