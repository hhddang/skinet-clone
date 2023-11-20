import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  activeSlideIndex: number = 0;

  public toPrevSlide = () => {
    if (this.activeSlideIndex == 0) {
      this.activeSlideIndex = 2;
      return;
    }
    this.activeSlideIndex -= 1;
  };

  public toNextSlide = () => {
    if (this.activeSlideIndex == 2) {
      this.activeSlideIndex = 0;
      return;
    }
    this.activeSlideIndex += 1;
  };

  public toSlide = (newSlideIndex: number) => {
    this.activeSlideIndex = newSlideIndex;
  };
}
