import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { FaqsComponent } from "./faqs/faqs.component";
import { LoginComponent } from "./login/login.component";
import { ActivateComponent } from './activate/activate.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SavePasswordComponent } from './save-password/save-password.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UsersComponent } from './admin/users/users.component';

import {GetcoinComponent} from "./getcoin/getcoin.component";
import { EthereumComponent } from './getcoin/ethereum/ethereum.component';
import { EthclassicComponent } from './getcoin/ethclassic/ethclassic.component';
import { DashComponent } from './getcoin/dash/dash.component';
import { LitecoinComponent } from './getcoin/litecoin/litecoin.component';
import { DigibyteComponent } from './getcoin/digibyte/digibyte.component';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { AdminAuthGuard } from './guards/adminAuth.guard';
import { AdminNotAuthGuard } from './guards/adminNotAuth.gurad';

const routes: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'user-profile', component: ProfileComponent },
    { path: 'signup', component: SignupComponent, canActivate: [NotAuthGuard] },
    { path: 'aboutus', component: LandingComponent },
    { path: 'nucleoicons',component: NucleoiconsComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
    { path: 'activate/:token', component: ActivateComponent, canActivate: [NotAuthGuard]},
    { path: 'resetPassword', component: ResetPasswordComponent, canActivate: [NotAuthGuard] },
    { path: 'changePassword/:token', component: SavePasswordComponent, canActivate: [NotAuthGuard] },
    { path: 'admin/manageUsers', component: UsersComponent, canActivate: [AdminAuthGuard] },
    { path: 'admin/login', component: AdminLoginComponent, canActivate: [AdminNotAuthGuard] },
    { path: 'getcoin',component: GetcoinComponent },
    { path: 'getcoin/ETH',component: EthereumComponent },
    { path: 'getcoin/ETC',component: EthclassicComponent },
    { path: 'getcoin/DASH',component: DashComponent },
    { path: 'getcoin/LTC',component: LitecoinComponent },
    { path: 'getcoin/DGB',component: DigibyteComponent },

    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
