import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  language: string = "";

  constructor(private languageService: LanguageService){
    // this.languageService.currentLanguage.subscribe((language: string) => {
    //   if (language === 'en') {
    //     this.language = 'en';
    //   } else if (language === 'ar') {
    //     this.language = 'مرحبا!';
    //   }
    // });
  }

}
