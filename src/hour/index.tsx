import React, { useEffect, useState } from 'react';

import { Container } from './styled';

export default function Time() {
    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        const date = new Date();

        setTimeout(() => {
            const numHour = date.getHours();
            const numMinutes = date.getMinutes();
            const numSeconds = date.getSeconds();

            const strHour = String(numHour);
            const strMinutes = String(numMinutes);
            const strSeconds = String(numSeconds);

            if (strHour.length === 1) {
                setHour('0' + strHour);
            } else {
                setHour(strHour);
            }

            if (strMinutes.length === 1) {
                setMinutes('0' + strMinutes);
            } else {
                setMinutes(strMinutes);
            }

            if (strSeconds.length === 1) {
                setSeconds('0' + strSeconds);
            } else {
                setSeconds(strSeconds);
            }
        }, 1000);
    }, [seconds]);

    return (
        <Container>
            <h2>
                {hour}:{minutes}
            </h2>
        </Container>
    );
}
