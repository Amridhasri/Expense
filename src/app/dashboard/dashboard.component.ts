import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap, switchMap } from 'rxjs';
import { DashboardService } from '../dashboard.service';
export interface Movie {
  balance:number,
  name :string,
  id : string,
 trans:string,
  amount:number,
  date:number,
  category:string,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  movieList$: any;

  constructor(private http: HttpClient, private dashboardService: DashboardService) {}

  ngOnInit() {
    this.movieList$ = this.dashboardService.getMovies();
  }

  deleteGetMovie(id: string) {
    this.movieList$ = this.dashboardService.deleteGetMovie(id);
  }

  trackByFn(index: number, mv: Movie) {
    return mv.id;
  }
};


