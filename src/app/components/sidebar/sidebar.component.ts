import { Component, OnInit } from '@angular/core';
import { Content, Sidebar } from '@model/sidebar';
import { SidebarService } from '@services/sidebar.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    sidebar?: Sidebar;
    content?: Content;
    sidebarData: any[] = [];
    constructor(private sidebarService: SidebarService) { }

    ngOnInit(): void {
        this.getsidebarDetails();
    }
    getsidebarDetails(): void {
        this.sidebarService.getSidebar().subscribe((data) => {
            this.sidebar = data;
            this.sidebarData = this.sidebar!.content.slice(0);
        });
    }
}
