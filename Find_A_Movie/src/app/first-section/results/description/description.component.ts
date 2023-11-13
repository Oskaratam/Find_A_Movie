import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer, Subject, Subscription, map } from 'rxjs';
import { FilmDataService } from '../film-data.service';
import { FindTrailerService } from 'src/app/services/find-trailer.service';


@Component({
  selector: 'fam-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent 
implements OnInit, OnDestroy {


  movieId$ !: Observable<number>;
  movieId !: number;
  playIsClicked : boolean = false


  constructor(private router: ActivatedRoute, private movieData: FilmDataService,  public trailerService : FindTrailerService) {
  }

  stopNavigation(event: Event){
    console.log(event)
    event.preventDefault();
  }

  movieData$ : Subject<any> = this.movieData.data$;

  movieDataObject !: any;

  subscriptionForMovieData !: Subscription;

  configureImageUrl() : string {
    return `https://image.tmdb.org/t/p/w500${this.movieDataObject['poster_path']}`
  }

  ngOnInit(): void {
    this.subscriptionForMovieData = this.movieData$.subscribe(value => this.movieDataObject = value)
  }

  ngOnDestroy(): void {
    this.subscriptionForMovieData.unsubscribe();
  }



}
