import React from "react";

import styles from "./ContactList.module.css";
import Card from "../UI/Card";

function ContactList(props) {
  return (
    <Card className={styles.contact}>
      <ul>
        {props.contacts.map((contact) => {
          return (
            <li key={contact.phone}>
              Name : {contact.name}
              &emsp; Phone : {contact.phone}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default ContactList;
