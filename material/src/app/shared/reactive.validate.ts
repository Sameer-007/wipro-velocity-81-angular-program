import { AbstractControl } from "@angular/forms";


//AbstractControl - allows access to the value of the from control
export function ValidateString(control: AbstractControl) {
    alert(control.value)

    console.log(String(control.value).length < 2)
    if (String(control.value).length <= 3) {
        return { invalidString: true }
    }
    return null
}