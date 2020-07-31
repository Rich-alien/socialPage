import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import {addMsgActionCreator, updateNewMsgTextActionCreator} from "../../Redux/dialogsReducer";
// import {addMsg} from "../../state";


const Dialogs = (props) => {

    let DialogElement =
            props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} Name={d.name}/>),
        MessageElements =
            props.dialogsPage.messages.map(m => <Message message={m.msg}/>);
    let newMessageElement = React.createRef();
    let onAddMessage = () => {
        props.addMessage();
    }
    let onMsgChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMsgText(text);
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    DialogElement
                }
            </div>
            <div className={s.messages}>
                {
                    MessageElements
                }

            </div>
            <div>

            </div>
            <div className={s.containerMsg}>
                <textarea
                    className={s.input}
                    onChange={onMsgChange}
                    ref={newMessageElement}
                    value={props.dialogsPage.newMsgText}
                />
                <button className={s.btnMsg}
                        onClick={onAddMessage}>
                    add
                </button>
            </div>

        </div>
    )
}

export default Dialogs