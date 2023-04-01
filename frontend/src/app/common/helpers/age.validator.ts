import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment'
// create your class that extends the angular validator class
export class AgeValidator extends Validators {
    static validateAgeByDate(control: FormControl) {
        let ds = `${control.value}`;
        let date = moment(new Date(ds.substr(0, 16)));
        const selectedYear = +date.format("YYYY")
        const currentYear = +moment().year()
        const yearDiff = currentYear - selectedYear;
        if (+yearDiff <= 16) {
            return null;
        } else {
            return { notEligible: true }
        }
    }
}