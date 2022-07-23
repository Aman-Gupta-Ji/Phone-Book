import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          error={props.error}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
