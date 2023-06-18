import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// @Input() url:string="https://i0.wp.com/juntrax.com/blog/wp-content/uploads/2020/10/Expenses-Management-System-Featured-Juntrax.jpg?w=744&ssl=1";
@Input() url:string="https://th.bing.com/th/id/OIP.TuSMmGlZ_urga67VNE9tvgHaE7?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

}
