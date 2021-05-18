import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { WorkComponent } from './component/work/work.component';
import { ProjectComponent } from './component/project/project.component';
import {HttpClientModule} from '@angular/common/http';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ProjectComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
