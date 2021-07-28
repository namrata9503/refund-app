import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from 'src/app/model/expense';

@Injectable({
    providedIn: 'root',
})
export class AddExpenseService {

    constructor(private http: HttpClient) { }

    addExpense(expense: Expense): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(expense);
        return this.http.post('https://api-front-end-challenge.buildstaging.com/api/expense/add', body, { headers, observe: 'response' });
    }
}
