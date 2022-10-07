import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { LoginService } from './services/login.service';
=======
import { AuthService } from './shared/auth.service';
>>>>>>> updates

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{

  title = 'crud-child-parent';

<<<<<<< HEAD
  constructor(private loginService: LoginService, private router:Router) { }
=======
  constructor(private authService: AuthService, private router:Router) { }
>>>>>>> updates

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  isLogin!: boolean;
  buttonLogout!: boolean

  ngOnInit(): void {
    this.isLogin = false;
    this.buttonLogout = false;
  }

  checkLogin(): void {
<<<<<<< HEAD
    this.isLogin = this.loginService.isLoggedIn();
=======
    this.isLogin = this.authService.isLoggedIn;
>>>>>>> updates
    this.buttonLogout = true;
  }

  logout(){
<<<<<<< HEAD
    this.loginService.logout();
=======
    this.authService.doLogout();
>>>>>>> updates
    this.router.navigateByUrl('/home');
    this.buttonLogout = false;
  }
}
