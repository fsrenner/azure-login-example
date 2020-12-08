import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  MsalModule,
  MsalInterceptor,
  MSAL_CONFIG,
  MSAL_CONFIG_ANGULAR,
  MsalService,
  MsalAngularConfiguration
} from '@azure/msal-angular';
import { Configuration } from 'msal';

import { AzureConfig } from './azure.config';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './_shared/error/error.component';
import { ConfirmDialogComponent } from './_shared/confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from './_shared/success-dialog/success-dialog.component';

function MSALConfigFactory(): Configuration {
  return {
    auth: AzureConfig.auth,
    cache: AzureConfig.cache
  };
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return AzureConfig.msalAngularConfig;
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GetUsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    HomeComponent,
    ErrorComponent,
    ConfirmDialogComponent,
    SuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MsalModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
