import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Expense } from 'src/app/model/expense';
import { HeaderList, CostCenters } from 'src/app/model/headerList';
import { AddExpenseService } from 'src/app/services/add-expense.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    lists$?: Observable<HeaderList[]>;
    listss?: HeaderList;
    costCenter?: CostCenters;
    detailListData: any[] = [];
    expense = new Expense();

    showModal = false;

    percentDone!: number;
    uploadSuccess!: boolean;

    constructor(private headerListService: HeaderService,
        private addExpenseService: AddExpenseService,
        private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getList();
        this.getListDetails();
    }
    /* get all header list from header.service */
    getList(): void {
        //  this.lists$ = this.headerListService.getHeaderList();

        this.headerListService.getHeaderList().subscribe((data) => {
            this.listss = data;
        });
    }
    getListDetails(): void {
        this.headerListService.getHeaderList().subscribe((data) => {
            this.listss = data;
            this.detailListData = this.listss!.costCenters.slice(0);

        });
    }

    upload(event: Event) {

        const element = event.currentTarget as HTMLInputElement;
        const fileList: FileList | null = element.files;
        if (fileList) {
            console.log('FileUpload -> files', fileList);
        }
    }
    toggleModal() {
        this.showModal = ! this.showModal;
    }

    addExpense() {
        this.addExpenseService.addExpense(this.expense)
            .subscribe((expense) => {
                console.log(expense);
            });
    }
    processExpenses() {
        this.toggleModal();
        this.addExpense();
    }
}
