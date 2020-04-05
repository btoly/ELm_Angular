import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SliderImagesComponent } from './slider-images/slider-images.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectRegisterComponent } from './select-register/select-register.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CertificateComponent } from './certificate/certificate.component';
import { SettingsIndComponent } from './settings-ind/settings-ind.component';







@NgModule({


  declarations: [
    AppComponent,
    LoginComponent,

    NavbarComponent,

    FormComponent,

    BackgroundComponent,

    HomeComponent,

    SliderImagesComponent,



    PageNotFoundComponent,



    SelectRegisterComponent,



    ContactComponent,



    FooterComponent,



    CertificateComponent,



    SettingsIndComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]


})export class AppModule { }
