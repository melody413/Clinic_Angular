import { Component } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent {
  language: string = "";
  dropdown: boolean[] = [false, false, false, false, false];

  ngOnInit() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (!target.matches('.toggle-btn') && !target.matches('.dropdown_search')) {
        this.dropdown = [false, false, false, false, false];
      }
    });
  }


  toggleDropdown(idx: number){
    if(this.dropdown[idx]){
      this.dropdown = [false, false, false, false, false];
      return;
    }
    this.dropdown = [false, false, false, false, false];
    this.dropdown[idx] = true;
  }
}
