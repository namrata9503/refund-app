import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import { AddExpenseService } from './add-expense.service';

let addExpenseService: AddExpenseService;
let httpMock: HttpTestingController;

describe('AddExpenseService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AddExpenseService],
        });
        addExpenseService = TestBed.inject(AddExpenseService);
        httpMock = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(addExpenseService).toBeTruthy();
    });
});

describe('addExpense()', () => {
    const arrayOfBlob = new Array<Blob>();
    it('returned Observable should match the right data', () => {
        const mockExpense = {
            expenseTypeCode: 'hotel-fee',
            currencyCode: 'BRL',
            amountSpent: 11,
            amountTotal: 72,
            notes: 'Expense description',
            cardDate: new Date('2020-05-04'),
            resourceUrl: new File(arrayOfBlob, 'Mock.png'),
        };
        addExpenseService
            .addExpense({
                expenseTypeCode: 'hotel-fee',
                currencyCode: 'BRL',
                amountSpent: 11,
                amountTotal: 72,
                notes: 'Expense description',
                cardDate: new Date('2020-05-04'),
                resourceUrl: new File(arrayOfBlob, 'Mock.png'),
            })
            .subscribe((res) => {
                console.log(`dataaaaaaaaaaaaa : ${res.body.expenseTypeCode}`);

                expect(res.body.expenseTypeCode).toEqual('hotel-fee');
                expect(res.body.currencyCode).toEqual('BRL');
                expect(res.body.amountSpent).toEqual(11);
                expect(res.body.amountTotal).toEqual(72);
                expect(res.body.notes).toEqual('Expense description');
                expect(res.body.cardDate).toEqual(new Date('2020-05-04'));
                expect(res.body.resourceUrl).toEqual(new File(arrayOfBlob, 'Mock.png'));
            });

        const req = httpMock.expectOne('https://api-front-end-challenge.buildstaging.com/api/expense/add');

        expect(req.request.method).toEqual('POST');

        req.flush(mockExpense);
    });
});
