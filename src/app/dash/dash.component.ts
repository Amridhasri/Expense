import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
@Input() trans=
{balance:20000,
  name :'Vikram',
 id : 22345667888,
 trans:"debited",
  amount:400,
  date:"5-5-2022",
  category:"food",
 };
 @Output() delete = new EventEmitter<string>();

  show = true;

  constructor(private router: Router) {}

  

  // Step 2
  delMovie(id: string) {
    console.log('Emitting...', id);
    // To parent component
    this.delete.emit(id);
  }

  goToDetails(id: string) {
    this.router.navigate([`/dashboard/${id}`]);
  }
}

