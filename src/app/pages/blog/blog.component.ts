import { Component } from '@angular/core';
import { SlideInterface } from 'src/app/components/image-slider/types/slide.interface';
import { ImageSliderModule } from 'src/app/components/image-slider/image-slider.module';
import { ImageSliderComponent } from 'src/app/components/image-slider/image-slider/image-slider.component';
import {
  NzCarouselTransformNoLoopStrategy,
  NzCarouselFlipStrategy,
  NZ_CAROUSEL_CUSTOM_STRATEGIES
} from 'ng-zorro-antd/carousel';


@Component({
  selector: 'app-blog',
  template: `
    <nz-carousel nzAutoPlay>
      <div nz-carousel-content *ngFor="let index of array">
        <h3>{{ index }}</h3>
      </div>
    </nz-carousel>
  `,
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
        margin-bottom: 0;
        user-select: none;
      }
    `
  ]
})



export class BlogComponent {
  // slides: SlideInterface[] = [
  //   { url: '/assets/images/blog/اختبار-الحمل-بالكلور.jpg', title: 'beach' },
  //   { url: '/assets/images/blog/أفضل-وضعية-للجماع-في-الأشهر-الأخيرة-من-الحمل.jpg', title: 'beach' },
  //   { url: '/assets/images/blog/الأطفال-وكورونا-220x150.jpg', title: 'beach' },
  // ];
  // public strategy = 'transform-no-loop';
  // public array = [1, 2, 3, 4];
  // slides = [
  //   {
  //     src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp',
  //     img: 'https://mdbootstrap.com/img/Photos/Slides/1.webp',
  //     alt: 'Table Full of Spices',
  //   },
  //   {
  //     src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp',
  //     img: 'https://mdbootstrap.com/img/Photos/Slides/2.webp',
  //     alt: 'Winter Landscape',
  //   },
  //   {
  //     src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp',
  //     img: 'https://mdbootstrap.com/img/Photos/Slides/3.webp',
  //     alt: 'View of the City in the Mountains',
  //   },
  //   {
  //     src: 'https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp',
  //     img: 'https://mdbootstrap.com/img/Photos/Slides/4.webp',
  //     alt: 'Place Royale Bruxelles',
  //   },
  // ];
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
