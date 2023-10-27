import { Injectable } from '@angular/core';
import { SearchConfig } from './search-config.interface';

@Injectable({
  providedIn: 'root'
})
export class FindMovieService {

  constructor() { }

  pickingResults : any[] = [];
  searchConfig : SearchConfig = {
    movieId: '',
    gteDate: '',
    lteDate: '',
    includeAdult: true,
  }

  findMovie(){
    for(let i = 0; i < this.pickingResults.length; i++){
      switch(i) {
        case 0:
          this.searchConfig.movieId = this.pickingResults[0]
          break;
        case 1:
          this.searchConfig.gteDate = this.pickingResults[1][0];
          this.searchConfig.lteDate = this.pickingResults[1][1];
          break;
        case 2:
          switch(this.pickingResults[2]){
            case 2:
              this.searchConfig.includeAdult = true;
              break;
            case 1:
              this.searchConfig.includeAdult = false;
              break;
            case 0:
              this.searchConfig.includeAdult = false;
              this.searchConfig.keyword = 286758;
              break;
          }
          break;
      }
    }
  }

  
}
