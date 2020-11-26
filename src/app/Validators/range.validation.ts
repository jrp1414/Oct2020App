import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function RangeValidator(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
        if (c.value >= min && c.value <= max) {
            return null;
        }
        return { range: true };
    };
}