import { Injectable } from "@angular/core";
import { Customer } from "../model/customer";

@Injectable({
    providedIn: 'root'
})
export class AuthentaicationService {
    validateCustomerLogin(): boolean {
        let x = localStorage.getItem('username');
        let y = localStorage.getItem('password')
        if (x === y) {
            return true
        }
        return false
    }
}