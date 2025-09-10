// 2_5_1 Fix a request counter 
/*
    Вы работаете над приложением для рынка предметов искусства, которое позволяет пользователю одновременно отправлять несколько заказов на предметы искусства. Каждый раз, когда пользователь нажимает кнопку "Купить", счетчик "Отложенные" должен увеличиваться на единицу. Через три секунды счетчик "Отложенные" должен уменьшиться, а счетчик "Выполненные" - увеличиться.

    Однако счетчик "Отложенные" ведет себя не так, как задумано. Когда вы нажимаете кнопку "Купить", он уменьшается до -1 (что не должно быть возможно!). А если дважды нажать кнопку "Быстро", то оба счетчика ведут себя непредсказуемо.

    Почему так происходит? Исправьте оба счетчика.
*/
import { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(p => p + 1);        
        await delay(3000);
        setPending(p => p - 1);
        setCompleted(c => c + 1);
    }

    return (
        <>
            <h3>Отложенные: {pending}</h3>
            <h3>Выполненные: {completed}</h3>
            <button onClick={handleClick}>Купить</button>
        </>
    );
}

function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}