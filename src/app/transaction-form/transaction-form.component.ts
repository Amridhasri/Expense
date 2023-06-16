import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

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
constructor(private fb: FormBuilder) {}

  onSubmit() {
    // console.log(this.nameForm.get('username')?.value);
    console.log(this.nameForm.status);

    if (this.nameForm.invalid) {
      console.log(
        'Try again',
        this.nameForm.get('date')?.errors,
        this.nameForm.get('amount')?.errors,
        this.nameForm.get('category')?.errors,
      );
    } else {
      console.log(this.nameForm.value);
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
