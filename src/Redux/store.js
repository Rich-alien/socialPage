// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sideBarReducer from "./sidebarReducer";

// let store = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Zero',},
//                 {id: 2, name: 'Fuck',},
//                 {id: 3, name: 'Suck',},
//                 {id: 4, name: 'Zet',},
//                 {id: 5, name: 'Nick',},
//             ],
//             messages: [
//                 {id: 1, msg: 'Hi'},
//                 {id: 2, msg: 'Hello'},
//                 {id: 3, msg: 'wtf'},
//                 {id: 4, msg: 'who are u'},
//                 {id: 5, msg: 'Fuck u'},
//
//             ],
//             newMsgText: '',
//         },
//         profilePage: {
//             posts: [
//                 {id: 1, msg: 'Hi', likesCount: 23,},
//                 {id: 2, msg: 'Hello', likesCount: 23,},
//                 {id: 3, msg: 'wtf', likesCount: 23,},
//                 {id: 4, msg: 'who are u', likesCount: 23,},
//                 {id: 5, msg: 'Fuck u', likesCount: 23,},
//             ],
//             newPostText: '',
//         },
//         sidebar: {},
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//             this._state.profilePage = profileReducer(this._state.profilePage, action);
//             this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//             this._state.sidebar = sideBarReducer(this._state.sidebar, action);
//             this._callSubscriber(this._state);
//     }
// }



// export default store;
// window.store = store;