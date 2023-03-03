import NewDate from './newDate';

export default class Year extends NewDate {
    year(): number {
        return this.newDate.getFullYear();
    }
}
