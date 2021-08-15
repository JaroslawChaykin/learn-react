import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( el => <DialogItem name={el.name} id={el.id}/>)
    let messageElements = props.state.messageData.map( el => <Message text={el.message}/>)

    let newMessage = React.createRef();

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <div>
                    <textarea ref={newMessage} id="" cols="30" rows="3" />
                    <button>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs