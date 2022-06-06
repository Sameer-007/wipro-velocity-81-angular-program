import { Injectable } from '@angular/core';
import { CanActivate, } from '@angular/router';
import { AuthentaicationService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {

  constructor(private loginService: AuthentaicationService) {

  }
  canActivate(): boolean {
    alert('Can Activate Working')
    if (this.loginService.validateCustomerLogin()) {
      return true
    }
    alert("Kindly login the details")
    return false
  }
}
