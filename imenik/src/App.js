import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';


const App = () => {
  const [contacts, setContacts] = useState([]);

  // Učitaj kontakte iz localStorage prilikom inicijalizacije
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  // Sačuvaj kontakte u localStorage kad god se lista ažurira
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Funkcija za dodavanje kontakta
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  // Funkcija za brisanje kontakta
  const deleteContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  return (
    <div>
      <h1>Imenik</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
