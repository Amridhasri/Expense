import { Component,Output, EventEmitter } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  

  nameForm = this.fb.group({
    date: ['', Validators.required],
    amount: ['', Validators.required],
     category: ['', Validators.required],
});
constructor(private fb: FormBuilder,private dashboardservice: DashboardService,
  private router: Router) {}

  onSubmit() {
    // console.log(this.nameForm.get('username')?.value);
    console.log(this.nameForm.status);

    if (this.nameForm.valid) {
      const newMovie = this.nameForm.value;
      console.log(newMovie);
      this.dashboardservice.addMovie(newMovie as any).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    }
  }
 
  get date() {
    return this.nameForm.get('date');
  }

  get amount() {
    return this.nameForm.get('amount');
  }
  get category() {
    return this.nameForm.get('category');
  }
}
