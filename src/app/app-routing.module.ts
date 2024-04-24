import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/components/user/user.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';

const routes: Routes = [
  {path:"home", component:UserComponent},
  {path:'details/:id',component:UserDetailsComponent},
  {path:'**',redirectTo: 'home',pathMatch:'full'}
];

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
