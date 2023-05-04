import { useState } from "react";
import { AddContactsForm } from "../../components/AddContactsForm";
import { ContactsContainer } from "../../components/ContactsContainer";

export function MainPage() {
  const init = [...(JSON.parse(localStorage.getItem("contacts")) || [])];
  const [contacts, setContacts] = useState(init);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  // localStorage.setItem(
  //   "contacts",
  //   JSON.stringify([
  //     ...JSON.parse(localStorage.getItem("contacts")),
  //     ...contacts,
  //   ])
  // );

  return (
    <div className="h-screen bg-[#F1F6F9]">
      <AddContactsForm
        onSubmit={setContacts}
        contacts={contacts}
      ></AddContactsForm>
      <ContactsContainer contacts={contacts} setContacts={setContacts} />
    </div>
  );
}
