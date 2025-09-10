// 2_2_4 Remove unnecessary state
/*
  При нажатии на кнопку этот пример должен запросить имя пользователя, а затем вывести приветствие. Вы попытались использовать state для хранения имени, но по какой-то причине всегда выводится "Hello, !".

  Чтобы исправить этот код, удалите ненужную переменную state (мы обсудим почему это не сработало позже).

  Можете ли вы объяснить, почему эта переменная состояния была ненужной?
*/

//import { useState } from 'react';

export default function FeedbackForm() {
    //const [name, setName] = useState('');

    function handleClick() {
        //setName(prompt('What is your name?')??"");
        let name = prompt('What is your name?') ?? ""
        alert(`Hello, ${name}!`);
    }

    return <button onClick={handleClick}>Greet</button>;
}