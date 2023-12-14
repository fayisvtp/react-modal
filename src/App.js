// App.js
import React, { useState } from 'react';
import SignupForm from './SignupPage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <h1>Welcome to our App!</h1>
      <button onClick={openModal}>Open Signup Modal</button>
      <SignupForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
