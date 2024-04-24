import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from '../users/components/user/user.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { UserDetailsComponent } from '../users/components/user-details/user-details.component';


@NgModule({
  declarations: [
    // HeaderComponent,
    // SpinnerComponent,
    // UserComponent,
    // UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
  
  ],

  exports: [
    // HeaderComponent,
    // UserComponent,
    // UserDetailsComponent,
    // SpinnerComponent,
  ],
})
export class SharedModule { }
