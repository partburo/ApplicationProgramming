// 3_4_1 Fix disappearing input text 
/*
  Этот пример показывает сообщение при нажатии на кнопку. Однако при нажатии кнопки также происходит случайный сброс ввода. Почему так происходит? Исправьте, чтобы нажатие кнопки не сбрасывало вводимый текст.
*/

import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState('');
  
  return (
    <div>
      {showHint && (
        <p><i>Hint: Your favorite city?</i></p>
      )}
      <Form text={text} setText={setText}/>
      <button onClick={() => {
        setShowHint(!showHint);
      }}>
        {showHint ? 'Hide hint' : 'Show hint'}
      </button>
    </div>
  )
}

function Form({
  text,
  setText
}: {
  text: string,
  setText: (text: string) => void
}) {
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}