import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      addContact({ name, phone });
      setName('');
      setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ime"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Broj telefona"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Dodaj kontakt</button>
    </form>
  );
};

export default ContactForm;
