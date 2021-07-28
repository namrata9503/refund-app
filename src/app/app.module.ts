import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TimelineComponent,
        SidebarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
