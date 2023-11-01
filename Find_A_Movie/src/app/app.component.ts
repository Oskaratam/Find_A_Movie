import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Find_A_Movie';
  scroll: LocomotiveScroll | undefined;

  constructor() {}

  @ViewChild('scrollContent', { static: true}) scrollContent !: ElementRef;


  ngOnInit(): void { 
    window.addEventListener('scroll', e => {
      document.body.style.cssText += `--scrollTop: ${window.scrollY + 100}px`
    })
  }

  ngAfterViewInit() {
    const element: any = document.querySelector('[data-scroll-container]');
    console.log(this.scrollContent);

    
    this.scroll = new LocomotiveScroll({
      el: element,
      smooth: true,
      getDirection: true
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
