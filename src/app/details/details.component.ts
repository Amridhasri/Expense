import { Component,Input,Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() tran=
  {id:"1",
    category: "Rent",
  targetamount: "1000",
  targetdate: "3-4-2023"
   };
   @Output() delete = new EventEmitter<string>();
   constructor(private router: Router) {}
   routingmethod(){
    this.router.navigate(['/updatepage']);
   }
   delsaving(id: string) {
   
    // To parent component
    this.delete.emit(id);
  }
  
  goToDetail(id: string) {
    this.router.navigate([`/updatepage/${id}`]);
  }
  
}
