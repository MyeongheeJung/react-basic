export const initialState = {
  selectedId: 0,
  messages: {
    0: "",
    1: "",
    2: "",
  },
};

function MessengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        // message: action.message,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    case "sent_message": {
      return {
        ...state,
        // message: "",
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      };
    }
    default: {
      throw Error("Unknown action" + action.type);
    }
  }
}

export default MessengerReducer;
