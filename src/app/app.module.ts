import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashComponent } from './dash/dash.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SavingFormComponent } from './saving-form/saving-form.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardService } from './dashboard.service';
import { UpdateComponent } from './update/update.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { UpdatePageComponent } from './update-page/update-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Transactionform', component: TransactionFormComponent },
  { path: 'savingform', component:SavingFormComponent },
  { path: 'detailspage', component:DetailsPageComponent },
  // { path: 'update',component:UpdateComponent},
  { path: 'update/:id', component:UpdateComponent  },
  { path: 'updatepage/:id', component: UpdatePageComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashComponent,
    TransactionFormComponent,
    SavingFormComponent,
    HomeComponent,
    DetailsComponent,
    DetailsPageComponent,
    UpdateComponent,
    UpdatePageComponent,
    
    
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,RouterModule.forRoot(routes),HttpClientModule, 
    MatButtonModule,MatInputModule  ,MatFormFieldModule,MatIconModule,MatToolbarModule,MatMenuModule,
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
