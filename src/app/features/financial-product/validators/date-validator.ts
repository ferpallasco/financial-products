import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;
    const value = control.value;

    if (!value) {
      return null; // No validation if the field is empty
    }

    // Check if the date matches the format YYYY-MM-DD
    if (!datePattern.test(value)) {
      return { invalidDateFormat: true };
    }

    // Extract year, month, and day from the input string
    const [year, month, day] = value
      .split('/')
      .map((num: string) => parseInt(num, 10));

    // Validate month range (1-12)
    if (month < 1 || month > 12) {
      return { invalidDateFormat: true };
    }

    // Validate day range for the given month and year
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      return { invalidDate: true };
    }

    // Create a date object for the input date in UTC
    const inputDate = new Date(Date.UTC(year, month - 1, day));

    // Create date objects for today, minDate, and maxDate
    const today = new Date(
      Date.UTC(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
    );

    // Compare the input date to today and the defined range
    if (inputDate < today) {
      return { dateInPast: true };
    }

    return null;
  };
}

export function dateExactlyOneYearValidator(
  startDateControl: AbstractControl
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const startDate = new Date(startDateControl.value);
    const endDate = new Date(control.value);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return null; // Return if any date is invalid
    }

    // Calculate the difference in years
    const isExactlyOneYear =
      endDate.getFullYear() === startDate.getFullYear() + 1 &&
      endDate.getMonth() === startDate.getMonth() &&
      endDate.getDate() === startDate.getDate();

    return isExactlyOneYear ? null : { dateNotExactlyOneYear: true };
  };
}
