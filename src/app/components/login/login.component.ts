import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { EmailValidator, FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { LoginService } from 'src/app/services/login.service';
=======
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
>>>>>>> updates

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;
  isSubmitted  =  false;

  constructor(
<<<<<<< HEAD
    private loginService: LoginService,
=======
    private authService: AuthService,
>>>>>>> updates
    private router: Router,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.authForm  =  this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() { 
    return this.authForm.controls; 
  }

  signIn(){
    this.isSubmitted = true;
    if(this.authForm.invalid){
      return;
    }
<<<<<<< HEAD
    this.loginService.signIn(this.authForm.value);
    this.router.navigateByUrl('/dashboard');
    this.loginService.logoutBtn();
=======
    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/dashboard');
>>>>>>> updates
  }

}
