import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthentaicationService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
  })
  constructor(private formBuilder: FormBuilder,
    private authservice: AuthentaicationService) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginForm.value)

    localStorage.setItem('username', this.loginForm.value.username)
    localStorage.setItem('password', this.loginForm.value.password)

    let status = this.authservice.validateCustomerLogin()
    if (status) {
      alert('Login Success')
    }
    else {
      alert('Username and Password does not match ')
    }
  }

}
