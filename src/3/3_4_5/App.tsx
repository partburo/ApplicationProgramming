// 3_4_5 Fix misplaced state in the list 
/*
  В этом списке каждый Contact имеет состояние, которое определяет, была ли для него нажата галочка "Показать почту". Нажмите "Показать почту" для Алисы, а затем установите флажок "Показывать в обратном порядке". Вы заметите, что письмо Тейлора теперь развернуто, а письмо Алисы, которое переместилось в самый низ, кажется свернутым.

  Исправьте это так, чтобы развернутое состояние было связано с каждым контактом, независимо от выбранного порядка.
*/

import { useState } from 'react';
import Contact from './Contact';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          //value={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact, i) =>
          <li key={i}>
            <Contact contact={contact} />
          </li>
        )}
      </ul>
    </>
  );
}

export type ContactType = {
  id: number;
  name: string;
  email: string;
}

const contacts: ContactType[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];
