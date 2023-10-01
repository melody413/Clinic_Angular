import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCountryFlag: boolean = false;

  constructor(private translateService: TranslateService) {}
  changeLangage(lang: string) {
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }


  showDropdown() {
    this.isCountryFlag = true;
  }

  hideDropdown() {
    this.isCountryFlag = false;
  }
}
