import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    form;
    message;
    messageClass;
    processing = false;

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
      email: ['', Validators.required]
    });
  }

  disableForm() {
    this.form.controls['email'].disable();
  }

  enableForm() {
    this.form.controls['email'].enable();
  }

  onResetPassword() {
    this.processing = true;
    this.disableForm();
    const user = {
      email: this.form.get('email').value
    }

    this.authService.resetPassword(user).subscribe(data => {
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

  ngOnInit() {
  }

}
