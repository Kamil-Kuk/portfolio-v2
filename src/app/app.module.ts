import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { WorkComponent } from './component/work/work.component';
import { ProjectComponent } from './component/project/project.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactComponent } from './component/contact/contact.component';
import { TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

export function translateHttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  availableLng = ['eng', 'pol'];

  constructor(private translateService: TranslateService) {
    const tmpLng = 'eng';
    translateService.setDefaultLang(tmpLng);
  }

}
