import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './auth/register/register.component';
import { BodyCalComponent } from './calculator/body-cal/body-cal.component';
import { ChildCalComponent } from './calculator/child-cal/child-cal.component';
import { ObulationCalcComponent } from './calculator/obulation-calc/obulation-calc.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalComponent } from './hospital/hospital.component';
import { CenterComponent } from './center/center.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { BlogComponent } from './blog/blog.component';
import { MedicineComponent } from './medicine/medicine.component';


const Routing: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: '**',
    redirectTo: 'error/404',
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'doctor',
    component: DoctorComponent
  },

  {
    path: 'hospital',
    component: HospitalComponent
  },

  {
    path: 'center',
    component: CenterComponent
  },

  {
    path: 'pharmacy',
    component: PharmacyComponent
  },

  {
    path: 'cal/body',
    component: BodyCalComponent
  },
  
  {
    path: 'cal/child',
    component: ChildCalComponent
  },

  {
    path: 'cal/obulation',
    component: ObulationCalcComponent
  },

  {
    path: 'blog',
    component: BlogComponent
  },

  {
    path: 'medicine',
    component: MedicineComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(Routing)],
    exports: [RouterModule]
  })
export class PagesRoutingModule { }