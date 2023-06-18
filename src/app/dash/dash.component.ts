import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
@Input() trans=

{
  balance:20000,
  name :'Vikram',
  id : "456",
 trans:"debited",
  amount:400,
  date:"5-5-2022",
  category:"food",
 };
 @Output() delete = new EventEmitter<string>();

 

  constructor(private router: Router) {}

  routemethod(){
    this.router.navigate(['/update/:id']);
  }

  // Step 2
  delMovie(id: string) {
   
    // To parent component
    this.delete.emit(id);
  }
  
  
  // onSubmit() {
  //   console.log(this.nameForm.status);

  //   if (this.nameForm.valid) {
  //     const updatedMovie = this.nameForm.value;
      
  //     this.dashboardService.updateMovie(updatedMovie as any).subscribe(() => {
  //       this.router.navigate(['/dashboard']);
  //     });
  //   }
  // }

  goToDetails(id: string) {
    this.router.navigate([`/update/${id}`]);
  }
}

