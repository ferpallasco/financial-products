import { AbstractControl } from '@angular/forms';

export function idExistsValidator(exists: boolean) {
  return (control: AbstractControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    return exists ? { idExists: true } : null;
  };
}
