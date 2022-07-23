import React from "react";

import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function ErrorModal(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.error}</h2>
          </header>
          <div className={styles.content}>
            <pre>{props.message}</pre>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>OK</Button>
          </footer>
        </Card>
    </div>
  );
}

export default ErrorModal;
