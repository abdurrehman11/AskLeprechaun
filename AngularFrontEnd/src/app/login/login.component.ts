import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    test : Date = new Date();
    form: FormGroup;
    message;
    messageClass;
    processing = false;
    previousUrl;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { 
        this.createForm();
    }

    // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
      // Username Input
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  onLoginSubmit() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }

    this.authService.login(user).subscribe(data => {
      if(!data.success) {
        this.processing =  false;
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
        this.enableForm();
      } else {
        this.message = data.message;
        this.messageClass = 'alert alert-success';
        this.disableForm();
        this.authService.storeUserData(data.token, data.user);
          console.log(data.user.username);
          setTimeout(() => {
            if(this.previousUrl) {
              this.router.navigate([this.previousUrl]);
            } else {
              this.router.navigate(['/faqs']);
            }
          }, 2000);
        
      }

    });

  }

  resendActivationLink() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }

    this.authService.resendActivationLink(user).subscribe(data => {
      if(!data.success) {
        this.processing =  false;
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
        this.enableForm();
      } else {
        this.message = data.message;
        this.messageClass = 'alert alert-success';
        this.disableForm();
      }
    });

  }

    ngOnInit() {}
}
