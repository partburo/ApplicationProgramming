// 3_4_2 Swap two form fields
/*
  Эта форма позволяет вводить имя и фамилию. В ней также есть флажок, контролирующий, какое поле будет первым. Если установить флажок, поле "Фамилия" появится перед полем "Имя".

  Это почти работает, но есть ошибка. Если вы заполните поле "Имя" и установите флажок, текст останется в первом поле (теперь это "Фамилия"). Исправьте это так, чтобы при изменении порядка ввода текст также перемещался.
*/

import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field label="Last name" /> 
        <Field label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" /> 
        <Field label="Last name" />
        {checkbox}
      </>
    );    
  }
}

function Field({ label }: { label: string }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}


