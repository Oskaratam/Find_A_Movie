import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'fam-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent 
implements OnInit {


  movieId$ !: Observable<number>;
  movieId !: number;

  constructor(private router: ActivatedRoute){
  }

  goToBaseUrl () {
    window.location.href = 'http://localhost:4200' 
  }


  ngOnInit(): void {
    this.movieId$ = this.router.params.pipe(map(params => params['movieId']));
    this.movieId$.subscribe(id => {
      this.movieId = id;
    })


  }



}
