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
  let handleSendMessage = () => {
    alert(`Message to: ${contact.email}\nText: ${message}`)
    dispatch({
      type: 'edited_message',
      message: ''
    })
  }

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={
          (e) => dispatch({
            type: 'edited_message',
            message: e.target.value,
          })
        }
      />
      <br />
      <button onClick={handleSendMessage}>Send to {contact.email}</button>
    </section>
  );
}
