import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindMovieService } from 'src/app/services/find-movie.service';



const fadeIn = trigger("fadeInAnimation", [transition(':enter', [
  style({ opacity: 0 }),
  animate('0.06s ease-out', style({ opacity: 100 })),
])]);

@Component({
  selector: 'fam-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  animations: [fadeIn]
})
export class ResultsComponent implements OnInit {

  constructor(private findMovies: FindMovieService, private router: Router, private cdr: ChangeDetectorRef) {
  }

  results: any;

  ngOnInit(): void {
    window.addEventListener('scroll', e => {
      document.body.style.cssText += `--scrollTop: ${window.scrollY + 100}px`
  })
  
    setTimeout(() => {
      this.results = this.findMovies.responseFilms;
      console.log(this.results.results);
      this.cdr.detectChanges();
    }, 700);
  }

}
