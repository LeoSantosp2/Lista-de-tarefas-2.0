import NewDate from './newDate';

export default class Day extends NewDate {
    day(): string {
        const day = this.newDate.getDate();
        let strDay = String(day);

        if (strDay.length === 1) {
            strDay = '0' + strDay;
        }
        return strDay;
    }
}
