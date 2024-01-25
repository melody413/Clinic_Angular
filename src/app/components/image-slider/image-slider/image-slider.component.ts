import { Component, Input, HostListener  } from '@angular/core'; 
import { SlideInterface } from '../types/slide.interface';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;
  isDragging: boolean = false;
  startX: number = 0;
  threshold: number = 500; // Adjust the threshold value as needed

  @HostListener('window:mouseup')
  onWindowMouseUp() {
    this.onSliderMouseUp();
  }

  onSliderMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX || event.pageX;
  }

  onSliderMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const currentX = event.clientX || event.pageX;
      const diff = currentX - this.startX;

      if (diff > this.threshold) {
        this.goToNext();
        this.startX = currentX;
      } else if (diff < -this.threshold) {
        this.goToPrevious();
        this.startX = currentX;
      }
    }
  }

  onSliderMouseUp() {
    this.isDragging = false;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
  
    this.currentIndex = newIndex;
  }
  
  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
  
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}
