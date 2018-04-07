import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  processing = false;
  previousUrl;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private adminService: AdminService
  ) {
    this.createForm();  // Create Angular 2 Form when component loads
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

    this.adminService.login(user).subscribe(data => {
      if(!data.success) {
        this.processing = false;
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
        this.enableForm();
      } else {
        this.message = data.message;
        this.messageClass = 'alert alert-success';
        this.disableForm();
        this.authService.storeUserData(data.token, data.user);
        setTimeout(() => {
          this.router.navigate(['/admin/manageUsers']);
        }, 2000);
      }
    });

  }

  ngOnInit() {
  }

}
