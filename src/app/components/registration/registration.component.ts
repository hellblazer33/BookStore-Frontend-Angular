import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public router: Router, private user: UserService, private _snackbar: MatSnackBar) { }

  navigate() {
    this.router.navigate(['login']);
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobileNumber: ['', Validators.required],
    })
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      let payload = {
        fullname: this.registerForm.value.fullName,
        email: this.registerForm.value.emailId,
        password: this.registerForm.value.password,
        mobileNumber: this.registerForm.value.mobileNumber
      }
      //.subscribe method is used to get the response from backend
      this.user.register(payload).subscribe((response: any) => {
        console.log("*****Registration Successfull*****",response);
        this.router.navigate(['login'])
        this._snackbar.open("Registration Successful", "Close", { duration: 3000 })        

      }, (error) => {
        console.log(error);
      })
    }
  }
}
