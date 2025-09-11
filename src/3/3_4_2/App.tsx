// 3_4_2 Swap two form fields
/*
  Эта форма позволяет вводить имя и фамилию. В ней также есть флажок, контролирующий, какое поле будет первым. Если установить флажок, поле "Фамилия" появится перед полем "Имя".

  Это почти работает, но есть ошибка. Если вы заполните поле "Имя" и установите флажок, текст останется в первом поле (теперь это "Фамилия"). Исправьте это так, чтобы при изменении порядка ввода текст также перемещался.
*/

import { useState } from 'react';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  //const [text, setText] = useState('');

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

  return (
    <>
      {reverse ? (  
        <>
          <Field label="Last name" text={lastName} onChange={setLastName} /> 
          <Field label="First name" text={firstName} onChange={setFirstName} />
        </>
      ) : (
        <>
          <Field label="First name" text={firstName} onChange={setFirstName} />
          <Field label="Last name" text={lastName} onChange={setLastName} />
        </>
      )}
      {checkbox}
    </>
  );    
}

function Field({
    label,
    text,
    onChange
  }: {
    label: string,
    text: string,
    onChange: (value: string) => void
  }) {
    return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}


