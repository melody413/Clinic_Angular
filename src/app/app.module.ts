import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { PagesRoutingModule } from './pages/routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/errors/error404/error404.component';
import { Error500Component } from './pages/errors/error500/error500.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { BodyCalComponent } from './pages/calculator/body-cal/body-cal.component';
import { ChildCalComponent } from './pages/calculator/child-cal/child-cal.component';
import { MenstrualCycleCalComponent } from './pages/calculator/menstrual-cycle-cal/menstrual-cycle-cal.component';
import { ObulationCalcComponent } from './pages/calculator/obulation-calc/obulation-calc.component';
import { CalorieCalcComponent } from './pages/calculator/calorie-calc/calorie-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    Error500Component,
    LoginModalComponent,
    RegisterComponent,
    BodyCalComponent,
    ChildCalComponent,
    MenstrualCycleCalComponent,
    ObulationCalcComponent,
    CalorieCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutingModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
   TranslateModule.forRoot({
     loader: {
       provide: TranslateLoader,
       useFactory: httpTranslateLoader,
       deps: [HttpClient]
     }

   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support

export function httpTranslateLoader(http: HttpClient) {

  return new TranslateHttpLoader(http);
 
 }