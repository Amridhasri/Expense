import { Injectable } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, concatMap, switchMap } from 'rxjs';
import { Movie } from './dashboard/dashboard.component';
import { saving } from './details-page/details-page.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http
      .get('https://648a954117f1536d65e94f52.mockapi.io/expense')
      .pipe(catchError((err) => []));
  }
  getsavings() {
    return this.http
      .get('https://648a954117f1536d65e94f52.mockapi.io/savings')
      .pipe(catchError((err) => []));
  }

  getMovieById(id: string) {
    return this.http
      .get(`https://648a954117f1536d65e94f52.mockapi.io/expense/${id}`)
      .pipe(catchError((err) => []));
  }
  getsavingById(id: string) {
    return this.http
      .get(`https://648a954117f1536d65e94f52.mockapi.io/savings/${id}`)
      .pipe(catchError((err) => []));
  }

  addMovie(data: any) {
    return this.http
      .post('https://648a954117f1536d65e94f52.mockapi.io/expense', data)
      .pipe(catchError((err) => []));
  }
  addsavings(dat: any) {
    return this.http
      .post('https://648a954117f1536d65e94f52.mockapi.io/savings', dat)
      .pipe(catchError((err) => []));
  }
  updateMovie(movie: Movie) {
    return this.http
      .put(
        `https://648a954117f1536d65e94f52.mockapi.io/expense/${movie.id}`,
        movie
      )
      .pipe(catchError((err) => []));
  }
  updatesaving(save:saving) {
    return this.http
      .put(
        `https://648a954117f1536d65e94f52.mockapi.io/savings/${save.id}`,
        save
      )
      .pipe(catchError((err) => []));
  }
 

  // Step 4
  // Parent method
  deleteMovie(id: string) {
   
    return this.http
      .delete(`https://648a954117f1536d65e94f52.mockapi.io/expense/${id}`)
      .pipe(catchError((err) => []));
  }

  deletesaving(id: string) {
   
    return this.http
      .delete(`https://648a954117f1536d65e94f52.mockapi.io/savings/${id}`)
      .pipe(catchError((err) => []));
  }
  // Delete -> GET
  deleteGetMovie(id: string) {
    return this.deleteMovie(id).pipe(concatMap(() => this.getMovies()));
  }
  deleteGetsaving(id: string) {
    return this.deletesaving(id).pipe(concatMap(() => this.getsavings()));
  }
}

