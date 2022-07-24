import React, { useState, Fragment } from "react";
import AddContact from "./components/Contacts/AddContact";
import ContactList from "./components/Contacts/ContactList";
// import Wrapper from "./components/Helpers/Wrapper";

const DUMMYCONTACTS = [
  { name: "Aman Gupta", phone: "+91 87872 58237" },
  { name: "Rohit Kumar", phone: "+91 70705 25528" },
  { name: "Ayush Yadav", phone: "+91 70078 80769" },
];

function App() {
  const [contats, setContacts] = useState(DUMMYCONTACTS);
  const addContactHandler = (ename, ephone) => {
    setContacts((prev) => {
      return [{ name: ename, phone: ephone }, ...prev];
    });
  };
  return (
    <Fragment>
      <AddContact onAddContact={addContactHandler} />
      <ContactList contacts={contats} />
    </Fragment>
  );
}

export default App;
