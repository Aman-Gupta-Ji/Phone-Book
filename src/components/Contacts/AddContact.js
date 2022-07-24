import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import styles from "./AddContact.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddContact(props) {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();

  const [error, setError] = useState();

  const addContactHandler = (event) => {
    event.preventDefault();
    let enteredName = nameInputRef.current.value;
    let enteredPhone = phoneInputRef.current.value;
    enteredName = enteredName.trim();
    enteredPhone = enteredPhone.trim();
    if (enteredName.length === 0 || enteredPhone.length === 0) {
      setError({
        error: "Input Empty",
        message: "Please Enter a Name and Phone Number",
      });
      return;
    }
    const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
    if (!enteredPhone.match(phoneno)) {
      setError({
        error: "Input Valid Phone Number",
        message:
          "Please Enter a valid Phone Number like: \n+XX-XXXX-XXXX\n+XX.XXXX.XXXX\n+XX XXXX XXXX",
      });
      return;
    }
    props.onAddContact(enteredName, enteredPhone);
    nameInputRef.current.value = "";
    phoneInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          error={error.error}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addContactHandler}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={nameInputRef} />
          <label htmlFor="phone">Number </label>
          <input id="phone" type="tel" ref={phoneInputRef} />
          <Button type="submit">Add Contact</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddContact;
