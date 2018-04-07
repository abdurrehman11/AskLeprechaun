import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  
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

  ngOnInit() {
    let token = this.route.snapshot.paramMap.get('token');
    this.authService.activateUser(token).subscribe(data => {
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
