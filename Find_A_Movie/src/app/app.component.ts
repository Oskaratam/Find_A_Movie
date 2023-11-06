import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';
import { Route, RouterOutlet } from '@angular/router';
import { fader, topSlide } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    topSlide,
    fader
  ]
})
export class AppComponent implements OnInit {
  title = 'Find_A_Movie';
  scroll: LocomotiveScroll | undefined;

  constructor() {}

  @ViewChild('scrollContent', { static: true}) scrollContent !: ElementRef;

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  ngOnInit(): void { 
    // window.addEventListener('scroll', e => {
    //   document.body.style.cssText += `--scrollTop: ${window.scrollY + 100}px`
    // })
  }

  ngAfterViewInit() {
    const element: any = document.querySelector('[data-scroll-container]');


    



    //Smooth scroll and parallax effect
    this.scroll = new LocomotiveScroll({
      el: element,
      smooth: true,
      getDirection: true
    })

    this.scroll.on('scroll', (args) => {
      const scrollY = args.scroll.y;
      document.body.style.cssText += `--scrollTop: ${scrollY}px`
    })

    const ro = new ResizeObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
        if(this.scroll) {
          this.scroll.update();
        }
      });
    });

    ro.observe(this.scrollContent.nativeElement);
  }
}
