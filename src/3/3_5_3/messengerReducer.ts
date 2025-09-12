export type State = {
    selectedId: number;
    //message: string;
    messages: { [contactId: number]: string }
};

export type Action = {
    type: 'changed_selection';
    contactId: number;
} | {
    type: 'edited_message';
    message: string;
} | {
    type: 'sent_message';
};

export const initialState: State = {
    selectedId: 0,
    messages: {
        0: 'Hello',
        1: '',
        2: ''
    }
};

export function messengerReducer(
    state: State,
    action: Action
): State {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                //message: '',
            };
        }
        case 'edited_message': {
            return {
                ...state,
                //message: action.message,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message
                }
            };
        }
        case 'sent_message': {
            return {
              ...state,
              //message: '',
              messages: {
                ...state.messages,
                [state.selectedId]: ''
              }
            };
          }        
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
