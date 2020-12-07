import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [
        MsalGuard
      ]
    },
    {
      path: 'users',
      component: GetUsersComponent,
      canActivate: [
        MsalGuard
      ]
    },
    {
      path: 'adduser',
      component: AddUserComponent,
      canActivate: [
        MsalGuard
      ]
    },
    {
      path: 'updateuser',
      component: UpdateUserComponent,
      canActivate: [
        MsalGuard
      ]
    },
    {
      path: 'deleteuser',
      component: DeleteUserComponent,
      canActivate: [
        MsalGuard
      ]
    },
    {
      path: '',
      component: HomeComponent
    }
  ], { useHash: false}),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
