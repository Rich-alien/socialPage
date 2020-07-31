// import React from "react";
import {addMsgActionCreator, updateNewMsgTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//     // debugger;
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage;
//                 let addMessage = () => {
//                     store.dispatch(addMsgActionCreator());
//                 }
//                 let onMsgChange = (text) => {
//                     let action = updateNewMsgTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 return <Dialogs
//                     dialogsPage={state}
//                     addMessage={addMessage}
//                     updateNewMsgText={onMsgChange}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMsgText: (text) => {
            let action = updateNewMsgTextActionCreator(text);
            dispatch(action);

        },
        addMessage: () => {
            dispatch(addMsgActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;