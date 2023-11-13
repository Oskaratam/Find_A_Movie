import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindMovieService } from 'src/app/services/find-movie.service';
import { DescriptionComponent } from './description/description.component';
import { FilmDataService } from './film-data.service';



const fadeIn = trigger("fadeInAnimation", [transition(':enter', [
  style({ opacity: 0 }),
  animate('0.06s ease-out', style({ opacity: 100 })),
])]);

@Component({
  selector: 'fam-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  animations: [fadeIn],
  providers: [DescriptionComponent],
})
export class ResultsComponent implements OnInit {
  [x: string]: any;

  constructor(private findMovies: FindMovieService, private router: Router, private cdr: ChangeDetectorRef, public filmData: FilmDataService) {
  }

  results: any;
  resultsLength : number | null = null; 

  passData(film: any) {
    console.log(film);

    this.filmData.data$.next(film);
  }

  ngOnInit(): void {
    console.log(this.filmData.observer);
    window.addEventListener('scroll', e => {
      document.body.style.cssText += `--scrollTop: ${window.scrollY + 100}px`
    })

    setTimeout(() => {
      this.results = this.findMovies.responseFilms;
      console.log(this.results.results);
      this.resultsLength = this.results.results.length;
      console.log(this.resultsLength)
      this.cdr.detectChanges();
    }, 1500);
  }


}
