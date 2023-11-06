import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmDataService {

  constructor() { }

  observer !: Observer<any>;

  data$ = new BehaviorSubject('No Info');

}
