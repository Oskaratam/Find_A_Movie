import { Injectable } from '@angular/core';
import { SearchConfig } from './search-config.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from 'enviroment/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindMovieService {

  constructor(private http: HttpClient) { }

  pickingResults : any[] = [];
  searchConfig : SearchConfig = {
    genreId: '',
    gteDate: '',
    lteDate: '',
    includeAdult: true,
    originCountry: '',
  }

  getMovies$ !: Observable<any>;

  configureSearchData() {
    for(let i = 0; i < this.pickingResults.length; i++){
      switch(i) {
        case 0:
          this.searchConfig.genreId = this.pickingResults[0]
          break;
        case 1:
          this.searchConfig.gteDate = this.pickingResults[1][0];
          this.searchConfig.lteDate = this.pickingResults[1][1];
          break;
        case 2:
          switch(this.pickingResults[2]){
            case 2:
              this.searchConfig.includeAdult = true;
              delete this.searchConfig['keyword'];
              break;
            case 1:
              this.searchConfig.includeAdult = false;
              delete this.searchConfig['keyword'];
              break;
            case 0:
              this.searchConfig.includeAdult = false;
              this.searchConfig.keyword = 286758;
              break;
          }
          break;
        case 3:
          this.searchConfig.originCountry = this.pickingResults[3][0]
          break;
      }
    }
  }
  
  configureSearchUrl(config: SearchConfig) {
    let baseUrl = "https://api.themoviedb.org/3/discover/movie?include_video=true&language=en-US&page=1&sort_by=popularity.desc";
    baseUrl += `&with_genres=${config.genreId}`;
    baseUrl += `&release_date.gte=${config.gteDate}`;
    baseUrl += `&release_date.lte=${config.lteDate}`;
    baseUrl += `&include_adult=${config.includeAdult}`;
    baseUrl += `&with_origin_country=${config.originCountry}`;
    if(config.keyword){baseUrl += `&with_keywords=${config.keyword}`}
    return baseUrl;
  }

  responseFilms !: {};

  findMovie(){
    this.configureSearchData();
    const url = this.configureSearchUrl(this.searchConfig);
    // const requestHeaders = new HttpHeaders({Authorization: `Bearer ${env.apiToken}`, accept: 'application/json'});

    this.getMovies$ = this.http.get(url)
    this.getMovies$.subscribe(response => { this.responseFilms = response;
    });
  }

  
}
