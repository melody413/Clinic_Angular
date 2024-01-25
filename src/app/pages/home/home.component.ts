import { Component, HostListener , ChangeDetectorRef, Renderer2} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  language: string = "";
  isCountryFlag : boolean = false;
  searchBar_Content: boolean[] = [true, true, true, false, true];
  dropdown: boolean[] = [false, false, false, false, false];

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private langService: LanguageService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if(this.langService.getCurrentLanguage() == "ar"){
      this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
      this.language = "ar";
    }else{
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
      this.language = "en"
    }

    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.matches('.toggle-btn') && !target.matches('.dropdown_search')) {
        this.dropdown = [false, false, false, false, false];
      }
    });
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    const linkElement = clickedElement.closest('.nav-link') as HTMLElement;  
    if (!linkElement.classList.contains('nav-link')) {
      return;
    }  
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    linkElement.classList.add('active');
    this.changeSearchBar();
  }
  
  changeSearchBar(){
    this.route.fragment.subscribe(fragment => {
      switch(fragment){
        case 'doctor':
          this.searchBar_Content = [true, true, true, false, true];
          break;
        case 'hospital':
          this.searchBar_Content = [true, true, true, false, true];
          break;
        case 'center':
          this.searchBar_Content = [false, true, true, false, true];
          break;
        case 'pharmacy':
          this.searchBar_Content = [false, true, true, false, true];
          break;
        case 'lab':
          this.searchBar_Content = [false, true, true, true, true]
          break;
      }
      this.cdr.detectChanges();
    });
  }


  showDropdown() {
    this.isCountryFlag = true;
  }

  hideDropdown() {
    this.isCountryFlag = false;
  }


  toggleDropdown(idx: number){
    if(this.dropdown[idx]){
      this.dropdown = [false, false, false, false, false];
      return;
    }
    this.dropdown = [false, false, false, false, false];
    this.dropdown[idx] = true;
  }

  changeLanguage(){
    if(this.language == 'ar'){
      this.language = 'en';
      this.langService.setLanguage('en');
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
    }else{
      this.language = 'ar';
      this.langService.setLanguage('ar');
      this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
    }
    this.cdr.detectChanges();
  }
}
