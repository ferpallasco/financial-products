import { AbstractControl } from '@angular/forms';

export class InputValidation {
  public static checkInputErrors(ac: AbstractControl): boolean {
    return ac.invalid && (ac.dirty || ac.touched);
  }
}
