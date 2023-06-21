import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent {
  nameForm = this.fb.group({
    id:'',
    category: ['', Validators.required],
    targetamount: ['', Validators.required],
     targetdate: ['', Validators.required],
});
constructor(private fb: FormBuilder,private dashboardservice: DashboardService,
  private router: Router, private route: ActivatedRoute ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const saveId = route.get('id');

      this.dashboardservice.getsavingById(saveId as string).subscribe((data) => {
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
      this.dashboardservice.updatesaving(updatedsaving as any).subscribe(() => {
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
