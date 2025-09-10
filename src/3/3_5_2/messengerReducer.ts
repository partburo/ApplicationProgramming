export type State = {
    selectedId: number;
    message: string;
};

export type Action = {
    type: 'changed_selection';
    contactId: number;
} | {
    type: 'edited_message';
    message: string;
} | {
    type: 'sent_message';
    message: string;
};;

export const initialState = {
    selectedId: 0,
    message: 'Hello',
};

export function messengerReducer(
    state: State,
    action: Action
) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                message: '',
            };
        }
        case 'edited_message': {
            return {
                ...state,
                message: action.message,
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
