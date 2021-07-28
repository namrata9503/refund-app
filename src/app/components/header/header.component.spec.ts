import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('check whether getList() is called and observable value checks', async(() => {
        spyOn(component, 'getList').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.getList).toBeTruthy();
        expect(component.getList).toHaveBeenCalled();
    }));
    it('check whether getListDetails() is called and observable value checks', async(() => {
        spyOn(component, 'getListDetails').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.getListDetails).toBeTruthy();
        expect(component.getListDetails).toHaveBeenCalled();
    }));

    it('check showModel value', () => {
        expect(component.showModal).toBe(false);
    });
    it('check toggleModal() logic', () => {
        component.showModal = true;
        component.toggleModal();
        expect(component.showModal).toBe(false);
    });
});
