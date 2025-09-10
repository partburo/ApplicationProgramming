// 2_6_1 Fix incorrect state updates 
/*
    В этой форме есть несколько ошибок. Несколько раз нажмите на кнопку, увеличивающую оценку. Заметьте, что он не увеличивается. Затем отредактируйте имя и фамилию и заметите, что оценка внезапно "подхватила" ваши изменения. Наконец, отредактируйте фамилию, и заметите, что оценка полностью исчезла.

    Ваша задача — исправить все эти ошибки. Исправляя их, объясните, почему происходит каждая из них.
*/

import { useState } from 'react';

export default function Scoreboard() {
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        setPlayer({
            ...player,
            score: player.score + 1
        })
        //player.score++;
    }

    function handleFirstNameChange(e: any) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e: any) {
        setPlayer({
            ...player,
            lastName: e.target.value,
        });
    }

    return (
        <>
            <label>
                Score: <b>{player.score}</b>{' '}
                <button onClick={handlePlusClick}>
                    +1
                </button>
            </label>
            <label>
                First name:
                <input
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    );
}