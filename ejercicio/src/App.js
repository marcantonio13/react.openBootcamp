
import './App.css';
import React from 'react';
import ComponenteA from './components/ComponenteA';



function App() {

  const newContact = {
    name: 'German',
    surname: 'Settino',
    email: 'german.settino@gmail.com',
    connected: false,
  };


  return (
    <div className="App">
      <ComponenteA contact={newContact} /> 
    </div>
  );
}

export default App;
