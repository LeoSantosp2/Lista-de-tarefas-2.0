import WeekDay from './weekDay';
import Day from './day';
import Month from './month';
import Year from './year';

class Date {
    private week: WeekDay;
    private day: Day;
    private month: Month;
    private year: Year;

    constructor() {
        this.week = new WeekDay();
        this.day = new Day();
        this.month = new Month();
        this.year = new Year();
    }

    weekNumber(): number {
        return this.week.weekDayNumber();
    }

    weekName(): string {
        return this.week.weekDayName();
    }

    dayMonth(): string {
        return this.day.day();
    }

    monthNumber(): string {
        return this.month.monthNumber();
    }

    monthName(): string {
        return this.month.monthName();
    }

    fullYear(): number {
        return this.year.year();
    }
}

export default new Date();
