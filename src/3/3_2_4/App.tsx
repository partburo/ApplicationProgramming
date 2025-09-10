// 3_2_4 Implement multiple selection
/*
    В этом примере каждое Letter имеет свойство isSelected и обработчик onToggle, который отмечает его как выбранное. Это работает, но состояние хранится как selectedId (либо null, либо ID), поэтому в каждый момент времени может быть выбрано только одно письмо.

    Измените структуру состояния для поддержки множественного выбора (Как бы вы его структурировали? Подумайте об этом перед написанием кода). Каждый флажок должен стать независимым от других. Щелчок по выбранному письму должен снимать флажок. Наконец, нижний колонтитул должен показывать правильное количество выбранных элементов.
*/


import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // TODO: allow multiple selection
  const selectedCount = 1;

  function handleToggle(toggledId: number) {
    // TODO: allow multiple selection
    setSelectedId(toggledId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              letter.id === selectedId
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}

