import NewDate from './newDate';

export default class Month extends NewDate {
    monthNumber(): string {
        const month = this.newDate.getMonth() + 1;
        let strMonth = String(month);

        if (strMonth.length === 1) {
            strMonth = '0' + strMonth;
        }

        return strMonth;
    }

    monthName(): string {
        const monthName = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abriu',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ];

        return monthName[this.newDate.getMonth()];
    }
}
