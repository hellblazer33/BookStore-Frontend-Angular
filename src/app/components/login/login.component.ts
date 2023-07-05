import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service'; 
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public router: Router, private user: UserService, private _snackbar: MatSnackBar) { }
  navigate() {
    this.router.navigate(['/register']);
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    })
  }

  get f() { return this.loginForm.controls; }

    onSubmit() {
      this.submitted = true;

    if (this.loginForm.valid) {
      let payload = {
        email: this.loginForm.value.emailId,
        password: this.loginForm.value.password
      }
      //.subscribe method is used to get the response from backend (observable) like promises
        this.user.login(payload).subscribe((response: any) => {
        console.log("*****Login Successfull*****",response);
        this.router.navigate(['dashboard/getallbooks']);
        //set the token here and get in authguard
        localStorage.setItem('token', response.response.token)
        localStorage.setItem('UserId', response.response.userId)
        this._snackbar.open("Login Successful", "Close", { duration: 3000 })

      }, (error: any) => {
        console.log(error);
      })
    }
    this.loginForm.reset();
  }

  navAdmin(){
    this.router.navigate(['/adminlogin'])
  }
}

