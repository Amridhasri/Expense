import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  nameForm = this.fb.group({
    id:'',
    date: ['', Validators.required],
    amount: ['', Validators.required],
     category: ['', Validators.required],
});
constructor(private fb: FormBuilder,private dashboardservice: DashboardService,
  private router: Router, private route: ActivatedRoute ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const savingId = route.get('id');

      this.dashboardservice.getMovieById(savingId as string).subscribe((data) => {
        console.log(data);
        this.nameForm.patchValue(data as any);
      });
    });
  }

  onSubmit() {
    console.log(this.nameForm.status);

    if (this.nameForm.valid) {
      const updatedsaving = this.nameForm.value;
      console.log(updatedsaving);
      this.dashboardservice.updateMovie(updatedsaving as any).subscribe(() => {
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
