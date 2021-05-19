import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-v2';
  translations;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translations = this.translateService.store.translations[`${this.translateService.defaultLang}`];
  }

  public changeLangPol(): void {
    this.translateService.setDefaultLang('pol');
  }

  public changeLangEng(): void {
    this.translateService.setDefaultLang('eng');
  }
}
