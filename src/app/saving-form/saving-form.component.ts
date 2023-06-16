import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-saving-form',
  templateUrl: './saving-form.component.html',
  styleUrls: ['./saving-form.component.css']
})
export class SavingFormComponent {
  nameForm = this.fb.group({
    name: ['', Validators.required],
    targetamount: ['', Validators.required],
     targetdate: ['', Validators.required],
});
constructor(private fb: FormBuilder) {}

  onSubmit() {
    // console.log(this.nameForm.get('username')?.value);
    console.log(this.nameForm.status);

    if (this.nameForm.invalid) {
      console.log(
        'Try again',
        this.nameForm.get('name')?.errors,
        this.nameForm.get('targetamount')?.errors,
        this.nameForm.get('targetdate')?.errors,
      );
    } else {
      console.log(this.nameForm.value);
    }
  }

  get name() {
    return this.nameForm.get('date');
  }

  get targetamount() {
    return this.nameForm.get('targetamount');
  }
  get targetdate() {
    return this.nameForm.get('targetdate');
  }
}
