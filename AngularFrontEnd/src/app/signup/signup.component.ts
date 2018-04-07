import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    valid = true;
    form: FormGroup;
    message;
    messageClass;
    processing = false;
    emailValid;
    emailMessage;
    usernameValid;
    usernameMessage;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) {
        this.createForm();
    }

    // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
      // Username Input
      username: ['', Validators.compose([
        Validators.required,        // Field is required
        Validators.minLength(3),    // Minimum length is 3 characters
        Validators.maxLength(15),   // Maximum length is 15 characters
        this.validateUsername       // Custom validation
      ])],
      // Email Input
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validateEmail
      ])],
      // Password Input
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(35),
        this.validatePassword
      ])],
      // Confirm Password Input
      confirm: ['', Validators.required]
    }, { validator: this.matchingPasswords('password', 'confirm')});  // Add custom validator to form for matching passwords
  }

  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['email'].disable();
    this.form.controls['password'].disable();
    this.form.controls['confirm'].disable();
  }

  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
    this.form.controls['confirm'].enable();
  }

  // Function to validate e-mail is proper format
  validateEmail(controls) {
    if(controls.value === ""){
      return null;
    }

    // Create a regular expression
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateEmail': true };
    }
  }

  // Function to validate username is proper format
  validateUsername(controls) {
    if(controls.value === ""){
      return null;
    }

    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if(regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateUsername': true };
    }
  }

  // Function to validate password
  validatePassword(controls) {
    if(controls.value === ""){
      return null;
    }

    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    if(regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validatePassword': true };
    }
  }

  // Funciton to ensure passwords match
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      if(group.controls[confirm].value === "") {
        return null;
      }
      if(group.controls[password].value === group.controls[confirm].value) {
        return null;
      } else {
        return { 'matchingPasswords': true };
      }
    }
  }

  // Function to submit form
  onRegisterSubmit() {
    //console.log(this.form); 
    //console.log('form submitted');
    
    this.processing = true;
    this.disableForm();

    const user = {
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }

    this.authService.registerUser(user).subscribe(data => {
      console.log(data);
      if(!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
        this.enableForm();
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 5000);
      }
    });

  }

  checkUsername() {
    const username = this.form.get('username').value;
    if(username === "") {
      return ;
    }
    this.authService.checkUsername(username).subscribe(data => {
      console.log(data);
      if(!data.success) {
        this.usernameValid = false;
        this.usernameMessage = data.message;
      } else {
        this.usernameValid = true;
        this.usernameMessage = data.message;
      }
    });

    //console.log("checkUsername end");
  }

  checkEmail() {
    const email = this.form.get('email').value;
    if(email === "") {
      return ;
    }
    this.authService.checkEmail(email).subscribe(data => {
      if(!data.success) {
        this.emailValid = false;
        this.emailMessage = data.message;
      } else {
        this.emailValid = true;
        this.emailMessage = data.message;
      }
    });
  }

    ngOnInit() {}
}
