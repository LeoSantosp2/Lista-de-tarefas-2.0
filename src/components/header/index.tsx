import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineCheck } from 'react-icons/ai';

import { Container } from './styled';

import MyDate from '../../date/index';
import Time from '../../hour';
import useLocalStorage from '../../hooks/use-localStorage';

export default function Header() {
    const [name, setName] = useLocalStorage('name', '');
    const [input, setInput] = useState('');

    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        let newInput = input;
        newInput = newInput[0].toUpperCase() + newInput.substring(1);

        setName(newInput);
    };

    return (
        <Container>
            <div className="title">
                {name ? (
                    <h2>Bem vindo, {name}!</h2>
                ) : (
                    <div className="insertName">
                        <p>
                            Insira seu nome <AiOutlineArrowRight />
                        </p>
                        <input
                            type="text"
                            className="inputName"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={handleClick}>
                            <AiOutlineCheck size={18} />
                        </button>
                    </div>
                )}
            </div>

            <div className="date">
                <h3>
                    {MyDate.weekName()}, {MyDate.dayMonth()} de{' '}
                    {MyDate.monthName()} de {MyDate.fullYear()}
                </h3>
                <Time />
            </div>
        </Container>
    );
}
