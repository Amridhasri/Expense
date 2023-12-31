import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-saving-form',
  templateUrl: './saving-form.component.html',
  styleUrls: ['./saving-form.component.css']
})
export class SavingFormComponent {
  nameForm = this.fb.group({
    category: ['', Validators.required],
    targetamount: ['', Validators.required],
     targetdate: ['', Validators.required],
});
constructor(private fb: FormBuilder,private dashboardservice: DashboardService,
  private router: Router) {}

  onSubmit() {
    // console.log(this.nameForm.get('username')?.value);
    console.log(this.nameForm.status);

    if (this.nameForm.valid) {
      const newsaving = this.nameForm.value;
      console.log(newsaving);
      this.dashboardservice.addsavings(newsaving as any).subscribe(() => {
        this.router.navigate(['/detailspage']);
      });
    }
  }

  get category() {
    return this.nameForm.get('category');
  }

  get targetamount() {
    return this.nameForm.get('targetamount');
  }
  get targetdate() {
    return this.nameForm.get('targetdate');
  }
}
