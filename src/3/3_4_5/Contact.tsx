//import { useState } from 'react';
import { ContactType } from './App';

export default function Contact({
  contact,
  isExpanded,
  onToggleEmail
 }: {
  contact: ContactType,
  isExpanded: boolean,
  onToggleEmail: () => void
 }) {
  //const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p><b>{contact.name}</b></p>
      {isExpanded &&
        <p><i>{contact.email}</i></p>
      }
      <button onClick={onToggleEmail}>
        {isExpanded ? 'Hide' : 'Show'} email
      </button>
    </>
  );
}
