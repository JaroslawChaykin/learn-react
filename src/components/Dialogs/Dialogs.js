import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}><NavLink to={'/dialogs/1'}>Artem</NavLink></div>
                <div className={styles.dialog}><NavLink to={'/dialogs/2'}>Jaroslaw</NavLink></div>
                <div className={styles.dialog}><NavLink to={'/dialogs/3'}>Sveta</NavLink></div>
                <div className={styles.dialog}><NavLink to={'/dialogs/4'}>Petuh</NavLink></div>
                <div className={styles.dialog}><NavLink to={'/dialogs/5'}>Andrey</NavLink></div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>Pososy</div>
                <div className={styles.message}>Ladno</div>
            </div>
        </div>
    )
}

export default Dialogs