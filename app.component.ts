
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
       
        opacity: 1,
        color: 'yellow'
      })),
      state('closed', style({
       
        opacity: 0.8,
        color: '#c6ecff'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
 
})
export class AppComponent implements OnInit, OnDestroy {
  devicelg!: boolean;
  devicexs!: boolean;
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
  mediaSub!: Subscription;
  constructor(public mediaObserver: MediaObserver) { }
  isOpen = true;
  ngOnInit() {

    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {

      console.log(result.mqAlias);
      this.devicelg = result.mqAlias === 'lg' ? true : false;
      this.devicexs = result.mqAlias === 'xs' ? true : false;
    })
  }
      customOptions: OwlOptions = {
        loop: true,
        
        mouseDrag: true,
        touchDrag: true,
       
        pullDrag: true,
        dots: true,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items:1
          },
          940: {
            items: 3
          }
        },
        nav: true
  }
  customOptions1: OwlOptions = {
    loop: true,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  customOptions2: OwlOptions = {
    loop: true,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 9
      }
    },
    nav: true
  }

  customOptions4: OwlOptions = {
    loop: true,
    
   
    autoplayHoverPause: true,
    autoplaySpeed: 3000,
    mouseDrag: true,
 
    autoplay: true,
    autoplayTimeout: 300,
    
    touchDrag: true,
    pullDrag: true,
    dots: false,
   
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    
  }

}

