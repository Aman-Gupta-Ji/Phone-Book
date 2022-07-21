import React, { useState } from "react";

import Card from "../UI/Card";
import styles from "./AddContact.module.css";
import Button from "../UI/Button";

function AddContact(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const addContactHandler = (event) => {
    event.preventDefault();
    setEnteredName(enteredName.trim());
    setEnteredPhone(enteredPhone.trim());
    if (enteredName.length === 0 || enteredPhone.length === 0) {
      return;
    }
    const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
    // +XX-XXXX-XXXX
    // +XX.XXXX.XXXX
    // +XX XXXX XXXX
    if (!enteredPhone.match(phoneno)) {
      return;
    }
    setEnteredName("");
    setEnteredPhone("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addContactHandler}>
        <label htmlfor="name">Name</label>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label htmlfor="phone">Number </label>
        <input
          id="phone"
          type="tel"
          value={enteredPhone}
          onChange={phoneChangeHandler}
        />
        <Button type="submit">Add Contact</Button>
      </form>
    </Card>
  );
}

export default AddContact;
