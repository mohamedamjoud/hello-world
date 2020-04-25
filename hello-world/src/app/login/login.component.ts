import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  signIn(loginForm : NgForm){
    this.authService.login(loginForm.value)
      .subscribe(response=>{
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

        if (response)
          this.router.navigate([ returnUrl || '/' ]);
         else
          this.invalidLogin = true;
      });
  }

}
