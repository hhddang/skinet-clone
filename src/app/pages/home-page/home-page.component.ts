import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  activeSlideIndex: number = 0;

  ngOnInit() {
    // Handle slide image on drag
    const imageList = document.getElementsByClassName('image-list')[0];
    var beginClientX = 0;
    var endClientX = 0;

    imageList.addEventListener('dragstart', (event) => {
      beginClientX = (event as DragEvent).clientX;
    });

    imageList.addEventListener('dragend', (event) => {
      endClientX = (event as DragEvent).clientX;
      //  Slide whether drag distance is larger or equal to 200
      if (beginClientX + 200 <= endClientX) {
        this.toPrevSlide();
      }
      if (endClientX + 200 <= beginClientX) {
        this.toNextSlide();
      }
    });
  }

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
