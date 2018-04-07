import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FaqsComponent } from  './faqs/faqs.component';
import { ActivateComponent } from './activate/activate.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SavePasswordComponent } from './save-password/save-password.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UsersComponent } from './admin/users/users.component';

import { HomeModule } from './home/home.module';


import { GetcoinComponent } from  './getcoin/getcoin.component';

// import { FilterPipe } from './getcoin/filter.pipe';
import { EthereumComponent } from './getcoin/ethereum/ethereum.component';
import { EthclassicComponent } from './getcoin/ethclassic/ethclassic.component';
import { DashComponent } from './getcoin/dash/dash.component';
import { LitecoinComponent } from './getcoin/litecoin/litecoin.component';
import { DigibyteComponent } from './getcoin/digibyte/digibyte.component';

import { FilterPipe } from './filter.pipe';

import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
import { CoinService } from './services/coin.service'; 
import { TweetService } from './services/tweet.service';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { AdminAuthGuard } from './guards/adminAuth.guard';
import { AdminNotAuthGuard } from './guards/adminNotAuth.gurad';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
Observable.of(1,2,3).map(x => x + '!!!'); // etc


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    FaqsComponent,

    GetcoinComponent,
    FilterPipe,
    EthereumComponent,
    EthclassicComponent,
    DashComponent,
    LitecoinComponent,
    DigibyteComponent,

    ActivateComponent,
    ResetPasswordComponent,
    SavePasswordComponent,
    NotificationComponent,
    AdminLoginComponent,
    UsersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    AdminService,
    CoinService, 
    TweetService, 
    AuthGuard, 
    NotAuthGuard, 
    AdminAuthGuard, 
    AdminNotAuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
