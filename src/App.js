import React, { useState } from 'react';
import Form from '../src/components/Form';
import './App.css';
import Results from '../src/components/Results';

function App() {
const [state, setState] = useState({    // sets the state higher in scope to 
  firstName:"",
  lastName:"",
  email: "",
  password: "",
  confirmPassword: "",
});

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState}/>
      <Results data={state} />
    </div>
  );
}

export default App;
