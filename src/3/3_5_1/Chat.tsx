import { useState } from 'react';
import { Action } from './messengerReducer';
import { Contact } from './App';

export default function Chat(
    {
        contact, message, dispatch
    }:
    {
        contact: Contact,
        message: string,
        dispatch: (action: Action) => void
    }
) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
