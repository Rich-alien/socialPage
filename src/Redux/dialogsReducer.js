const ADD_MSG = 'ADD-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';
let initialState = {
    dialogs: [
        {id: 1, name: 'Zero',},
        {id: 2, name: 'Fuck',},
        {id: 3, name: 'Suck',},
        {id: 4, name: 'Zet',},
        {id: 5, name: 'Nick',},
    ],
    messages: [
        {id: 1, msg: 'Hi'},
        {id: 2, msg: 'Hello'},
        {id: 3, msg: 'wtf'},
        {id: 4, msg: 'who are u'},
        {id: 5, msg: 'Fuck u'},

    ],
    newMsgText: '',
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MSG: {
            let MsgText = state.newMsgText;
            return {
                ...state,
                newMsgText: '',
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    msg: MsgText,
                }],

            };
        }
        case UPDATE_NEW_MSG_TEXT: {
            return {
                ...state,
                newMsgText: action.value,
            };
        }
        default:
            return state;
    }

}

export const addMsgActionCreator = () => {
    return {
        type: ADD_MSG
    }
}
export const updateNewMsgTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MSG_TEXT, value: text,
    }
}
export default dialogsReducer;