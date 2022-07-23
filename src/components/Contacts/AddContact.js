import React, { useState } from "react";

import Card from "../UI/Card";
import styles from "./AddContact.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddContact(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [error, setError] = useState();

  const addContactHandler = (event) => {
    event.preventDefault();
    setEnteredName(enteredName.trim());
    setEnteredPhone(enteredPhone.trim());
    if (enteredName.length === 0 || enteredPhone.length === 0) {
      setError({
        error: "Input Empty",
        message: "Please Enter a Name and Phone Number",
      });
      return;
    }
    const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
    // +XX-XXXX-XXXX
    // +XX.XXXX.XXXX
    // +XX XXXX XXXX
    if (!enteredPhone.match(phoneno)) {
      setError({
        error: "Input Valid Phone Number",
        message: "Please Enter a valid Phone Number like: \n+XX-XXXX-XXXX\n+XX.XXXX.XXXX\n+XX XXXX XXXX",
      });
      return;
    }
    props.onAddContact(enteredName, enteredPhone);
    setEnteredName("");
    setEnteredPhone("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal error={error.error} message={error.message} onConfirm={errorHandler}></ErrorModal>}
      <Card className={styles.input}>
        <form onSubmit={addContactHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label htmlFor="phone">Number </label>
          <input
            id="phone"
            type="tel"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
          <Button type="submit">Add Contact</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddContact;
