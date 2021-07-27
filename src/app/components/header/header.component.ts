import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderList, CostCenters } from 'src/app/model/headerList';
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

    constructor(private headerListService: HeaderService) { }

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
}
