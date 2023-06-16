import { Injectable } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, concatMap, switchMap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http
      .get('https://648a954117f1536d65e94f52.mockapi.io/Expense')
      .pipe(catchError((err) => []));
  }

  getMovieById(id: string) {
    return this.http
      .get(`https://648a954117f1536d65e94f52.mockapi.io/Expense/${id}`)
      .pipe(catchError((err) => []));
  }

  addMovie(data: any) {
    return this.http
      .post('https://648a954117f1536d65e94f52.mockapi.io/Expense', data)
      .pipe(catchError((err) => []));
  }

  // Step 4
  // Parent method
  deleteMovie(id: string) {
    console.log('Deleting... movie', id);
    return this.http
      .delete(`https://648a954117f1536d65e94f52.mockapi.io/Expense/${id}`)
      .pipe(catchError((err) => []));
  }

  // Delete -> GET
  deleteGetMovie(id: string) {
    return this.deleteMovie(id).pipe(concatMap(() => this.getMovies()));
  }
}

