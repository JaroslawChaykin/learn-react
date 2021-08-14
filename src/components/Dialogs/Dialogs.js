import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={styles.message}>{props.text}</div>
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={'Artem'} id={'1'}/>
                <DialogItem name={'Debil'} id={'2'}/>
                <DialogItem name={'Jaroslaw'} id={'3'}/>
                <DialogItem name={'Sveta'} id={'4'}/>
                <DialogItem name={'Petuh'} id={'5'}/>
            </div>
            <div className={styles.messages}>
                <Message text={'Hi'} />
                <Message text={'How your day?'} />
            </div>
        </div>
    )
}

export default Dialogs