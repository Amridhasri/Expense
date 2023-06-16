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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Transactionform', component: TransactionFormComponent },
  { path: 'savingform', component:SavingFormComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashComponent,
    TransactionFormComponent,
    SavingFormComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,RouterModule.forRoot(routes),HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
