import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { env } from 'enviroment/env';
import { Observable, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindTrailerService {

  constructor( private http: HttpClient, private router: Router, private activatedRoute : ActivatedRoute, 
     private sanitizer: DomSanitizer) { }

  subscription !: Subscription;
  currentYoutubeTrailerUrl !: SafeUrl;
  movieId !: string | null;
  findTrailer(movieId : number){
    if(this.subscription){this.subscription.unsubscribe()};
    let baseUrl : string = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${env.apiKey}&language=en-US`;
    let trailerInfo;
    let trailerInfo$ : Observable<any> = this.http.get(baseUrl);
    this.subscription = trailerInfo$.subscribe(info => {trailerInfo = info; console.log(trailerInfo);
      const youtubeUrl = `https://www.youtube.com/embed/${trailerInfo.results[0].key}`;
      this.currentYoutubeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
      this.movieId = this.activatedRoute.snapshot.paramMap.get('movieId');
      // this.router.navigate(['description', movieId, 'trailer'])
    }
    )
  }
  
  
}
