import { async, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderList } from 'src/app/model/headerList';
import { HeaderService } from './header.service';

describe('HeaderService', () => {
    let service: HeaderService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: service, useClass: HeaderService }],
            imports: [RouterTestingModule, HttpClientTestingModule],
        }).compileComponents();

        http = TestBed.inject(HttpTestingController);
        service = TestBed.inject(HeaderService);
    });

    afterEach(() => {
        http.verify();
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('mock the HTTP get header service', async(() => {
        const mockHeader = [
            {
                id: 756,
                collaborator: {
                    name: 'Quickops BS',
                    email: 'quickops-bs@hotmart.com',
                },
                project: {
                    title: 'Afiliados Brasil',
                },
                justification: 'f',
                accountabilityExtraInfo: {
                    amountOfPeople: 1,
                },
                createdOn: 1588613238775,
                title: '-----teste',
            },
        ];
        service.getHeaderList().subscribe((data) => {
            const p = data.filter((header: HeaderList) => header.id === 756);
            expect(p[0].collaborator.name).toEqual('Quickops BS');
            expect(p[0].collaborator.email).toEqual('quickops-bs@hotmart.com');
            expect(p[0].project.title).toEqual('Afiliados Brasil');
            expect(p[0].justification).toEqual('f');
            expect(p[0].createdOn).toEqual(1588613238775);
            expect(p[0].title).toEqual('-----teste');
            expect(p[0].accountabilityExtraInfo.amountOfPeople).toEqual(1);
            console.log(mockHeader);
            expect(data.length).toBe(1);

            expect(data).toEqual(mockHeader);
        });
        const req = http.expectOne('https://api-front-end-challenge.buildstaging.com/api/header');
        expect(req.request.method).toBe('GET');
        req.flush(mockHeader);
    }));
});
