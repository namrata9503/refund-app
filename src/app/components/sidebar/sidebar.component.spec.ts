import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SidebarComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('check whether getsidebarDetails() is called and observable value checks', async(() => {
        spyOn(component, 'getsidebarDetails').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.getsidebarDetails).toBeTruthy();
        expect(component.getsidebarDetails).toHaveBeenCalled();
    }));
});
