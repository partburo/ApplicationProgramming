// 3_4_1 Fix disappearing input text 
/*
  Этот пример показывает сообщение при нажатии на кнопку. Однако при нажатии кнопки также происходит случайный сброс ввода. Почему так происходит? Исправьте, чтобы нажатие кнопки не сбрасывало вводимый текст.
*/

import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  if (showHint) {
    return (
      <div>
        <p><i>Hint: Your favorite city?</i></p>
        <Form />
        <button onClick={() => {
          setShowHint(false);
        }}>Hide hint</button>
      </div>
    );
  }
  return (
    <div>
      <Form />
      <button onClick={() => {
        setShowHint(true);
      }}>Show hint</button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

