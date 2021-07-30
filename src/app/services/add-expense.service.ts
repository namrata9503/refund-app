import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '@model/expense';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AddExpenseService {
    apiURL = environment.apiURL;

    constructor(private http: HttpClient) { }

    addExpense(expense: Expense): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(expense);
        return this.http.post(`${this.apiURL}/expense/add`, body, { headers, observe: 'response' });
    }
}
