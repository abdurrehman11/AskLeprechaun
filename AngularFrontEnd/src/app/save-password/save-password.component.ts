import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-save-password',
  templateUrl: './save-password.component.html',
  styleUrls: ['./save-password.component.css']
})
export class SavePasswordComponent implements OnInit {

    form: FormGroup;
    message;
    messageClass;
    processing = false;
    previousUrl;
    valid;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
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

  onChangePassword() {
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }

    this.authService.changePassword(user).subscribe(data => {
      if(!data.success) {
        this.processing = false;
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
        this.enableForm();
      } else {
        this.message = data.message;
        this.messageClass = 'alert alert-success';
        this.disableForm();
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 5000);
      }
    });

  }

  ngOnInit() {
    let token = this.route.snapshot.paramMap.get('token');
    this.authService.checkCredentials(token).subscribe(data => {
      if(!data.success) {
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
        this.valid = data.success;
      } else {
        this.message = data.message;
        this.messageClass = 'alert alert-success';
        this.valid = data.success;
      }
    });
  }

}
