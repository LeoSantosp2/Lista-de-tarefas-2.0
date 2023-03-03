import React, { Component } from 'react';
import {
    AiOutlinePlusCircle,
    AiOutlineEdit,
    AiOutlineCheck,
} from 'react-icons/ai';
import { RiDeleteBack2Line } from 'react-icons/ri';

import { Container } from './styled';

import date from '../../date';

export default class HomePage extends Component {
    state: {
        input: string;
        tasks: string[];
        index: number;
        dateInit: string[];
        dateFinish: string[];
    } = {
        input: '',
        tasks: [],
        index: -1,
        dateInit: [],
        dateFinish: [],
    };

    componentDidMount() {
        try {
            const tasks: string = JSON.parse(
                localStorage.getItem('tasks') || String(),
            );

            const dateInit: string = JSON.parse(
                localStorage.getItem('dateInit') || String(),
            );

            const dateFinish: string = JSON.parse(
                localStorage.getItem('dateFinish') || String(),
            );

            if (!tasks) return;

            this.setState({ tasks, dateInit, dateFinish });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.log(e.message);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    componentDidUpdate(prevProps: any, prevState: any): void {
        const { tasks, dateInit, dateFinish } = this.state;

        if (tasks === prevState.tasks) return;

        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('dateInit', JSON.stringify(dateInit));
        localStorage.setItem('dateFinish', JSON.stringify(dateFinish));
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            input: e.currentTarget.value,
        });
    };

    handleClickCreate = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        let { input } = this.state;
        input = input.trim();

        const { tasks, index, dateInit, dateFinish } = this.state;

        if (input === '') return;
        if (tasks.indexOf(input) !== -1) return;

        const dateInicial = `${date.dayMonth()}/${date.monthNumber()}/${date.fullYear()}`;

        const newTasks = [...tasks];
        const newDateInit = [...dateInit];
        const newDateFinish = [...dateFinish];

        if (index === -1) {
            this.setState({
                tasks: [...newTasks, input],
                input: '',
                dateInit: [...newDateInit, dateInicial],
                dateFinish: [...newDateFinish, ''],
            });
        } else {
            newTasks[index] = input;

            this.setState({
                tasks: [...newTasks],
                index: -1,
                input: '',
            });
        }
    };

    handleClickUpdate = (e: { preventDefault: () => void }, index: number) => {
        e.preventDefault();

        const { tasks } = this.state;

        this.setState({
            index,
            input: tasks[index],
        });
    };

    handleClickDelete = (e: { preventDefault: () => void }, index: number) => {
        e.preventDefault();

        const { tasks, dateInit, dateFinish } = this.state;

        const newTasks = [...tasks];
        newTasks.splice(index, 1);

        const newDateInit = [...dateInit];
        newDateInit.splice(index, 1);

        const newDateFinish = [...dateFinish];
        newDateFinish.splice(index, 1);

        this.setState({
            tasks: [...newTasks],
            dateInit: [...newDateInit],
            dateFinish: [...newDateFinish],
        });
    };

    handleClickFinish = (e: { preventDefault: () => void }, index: number) => {
        e.preventDefault();

        const { tasks, dateFinish } = this.state;

        const newTasks = [...tasks];
        const newDateFinish = [...dateFinish];

        const dateFinished = `${date.dayMonth()}/${date.monthNumber()}/${date.fullYear()}`;

        const td = document.getElementById(`${index}`) as HTMLElement;

        if (td.id === String(index)) {
            newDateFinish[index] = dateFinished;

            this.setState({
                tasks: [...newTasks],
                dateFinish: [...newDateFinish],
            });
        }
    };

    render() {
        const { input, tasks, dateInit, dateFinish } = this.state;

        return (
            <Container>
                <h1>Lista de Tarefas</h1>

                <div className="inputValue">
                    <input
                        type="text"
                        className="input"
                        value={input}
                        onChange={this.handleChange}
                    />

                    <button onClick={this.handleClickCreate}>
                        <AiOutlinePlusCircle size={18} />
                    </button>
                </div>

                <table>
                    <tr>
                        <th>Tarefa</th>
                        <th>Início</th>
                        <th>Fim</th>
                        <th>Mais Opções</th>
                    </tr>
                    {tasks.map((task, index) => (
                        <tr key={task}>
                            <td className="td-task">{task}</td>
                            <td>{dateInit[index]}</td>
                            <td id={`${index}`}>{dateFinish[index]}</td>
                            <td>
                                <AiOutlineEdit
                                    onClick={(e) =>
                                        this.handleClickUpdate(e, index)
                                    }
                                />
                                <RiDeleteBack2Line
                                    onClick={(e) =>
                                        this.handleClickDelete(e, index)
                                    }
                                />
                                <AiOutlineCheck
                                    onClick={(e) =>
                                        this.handleClickFinish(e, index)
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </table>
            </Container>
        );
    }
}
