import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <Form state={state} setState={setState}/>
      <Results formData={state}/>
    </div>
  );
}

export default App;
