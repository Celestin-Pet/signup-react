
/*import { useState, useEffect } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newUser = { ...formData };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setFormData({ name: '', email: '', password: '' });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleFormChange} />

      <button type="submit">Sign Up</button>
    </form>
  );
}*/
