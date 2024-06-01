import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imageslideshow',
  standalone: true,
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

  ngOnInit() {
    this.startSlideshow();
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
