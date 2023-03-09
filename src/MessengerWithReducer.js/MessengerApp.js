import React from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import { contacts } from "./Contacts";
import MessengerReducer, { initialState } from "./MessengerReducer";
import useReducer from "./MyReducerHook";

function MessengerApp() {
  const [state, dispatch] = useReducer(MessengerReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <>
      <ContactList
        contacts={contacts}
        seletedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </>
  );
}

export default MessengerApp;
