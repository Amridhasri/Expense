import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from '../dashboard.service';
export interface saving {
  id: string,
  name :string,
  targetamount:number,
  targetdate:number,
}
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {
   saving: any;
   constructor(private http: HttpClient, private dashboardService: DashboardService) {}
   ngOnInit() {
    this.saving = this.dashboardService.getsavings();
  }
  deleteGetsaving(id: string) {
    this.saving = this.dashboardService.deleteGetsaving(id);
  }
}
