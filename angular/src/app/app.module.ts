import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { UpdateGroupComponent } from './components/update-group/update-group.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    UpdateGroupComponent,
    CompanyDetailsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule, 
    MaterialModule.forRoot()
  ],
  entryComponents: [
    UpdateGroupComponent,
    CompanyDetailsComponent
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
