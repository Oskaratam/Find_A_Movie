import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror",
        "imgSrc": "../../assets/genreImages/horror.jpg",
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
    ];

    "dates": {
      "70s": ['1970-01-01', '1979-12-30'],
      "80s": ['1980-01-01', '1989-12-30'],
      "90s": ['1990-01-01', '1999-12-30'],
      "00s": ['2000-01-01', '2009-12-30'],
      "10s": ['2010-01-01', '2019-12-30'],
      "20s": ['2019-01-01', '2040-12-30']
    }

  constructor() { }
}
