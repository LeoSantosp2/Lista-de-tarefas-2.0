import NewDate from './newDate';

export default class WeekDay extends NewDate {
    weekDayNumber(): number {
        return this.newDate.getDay();
    }

    weekDayName(): string {
        const weekDay = [
            'Domingo',
            'Segunda-feira',
            'Terça-feira',
            'Quarta-feira',
            'Quinta-feira',
            'Sexta-feira',
            'Sábado',
        ];

        return weekDay[this.weekDayNumber()];
    }
}
