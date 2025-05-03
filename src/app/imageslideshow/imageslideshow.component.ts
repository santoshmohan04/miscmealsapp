import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-imageslideshow',
    imports: [FormsModule, CommonModule],
    templateUrl: './imageslideshow.component.html',
    styleUrl: './imageslideshow.component.scss'
})
export class ImageslideshowComponent implements OnInit, OnDestroy {

  images = [
    { image: "assets/burger.jpg", alt: 'A delicious, juicy burger' },
    { image: "assets/curry.jpg", alt: 'A delicious, spicy curry' },
    { image: "assets/dumplings.jpg", alt: 'Steamed dumplings' },
    { image: "assets/macncheese.jpg", alt: 'Mac and cheese' },
    { image: "assets/pizza.jpg", alt: 'A delicious pizza' },
    { image: "assets/schnitzel.jpg", alt: 'A delicious schnitzel' },
    { image: "assets/tomato-salad.jpg", alt: 'A delicious tomato salad' },
  ];

  currentImageIndex = 0;
  private intervalId!: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    this.startSlideshow();
    }
  }

  ngOnDestroy() {
    this.clearSlideshow();
  }

  startSlideshow() {
    this.intervalId = window.setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000);
  }

  clearSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
