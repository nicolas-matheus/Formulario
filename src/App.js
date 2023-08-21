import './App.css';
import React, {useState} from 'react';

function App() {

  const [name, setName] = useState ('')
  const [age, setAge] = useState('')
  const [birth, setBirth] = useState('')
  const [gender, setGender] = useState('')
  const [showResults, setShowResults] = useState(false)

  function Retorno(){
    setShowResults(true);
  }
  function Apagar(){
    setShowResults(false);
  }

  return (
    <div className="App">
      <input
        type="text"
        name={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="text"
        age={age}
        onChange={event => setAge(event.target.value)}
      />
      <input
        type="text"
        birth={birth}
        onChange={event => setBirth(event.target.value)}
      />
      <input
        type="text"
        gender={gender}
        onChange={event => setGender(event.target.value)}
      />
      <button onClick={Retorno}>Clique</button>
      <button onClick={Apagar}>Apague</button>
      <section>
        {showResults && <p>{name}, {age}, {birth}, {gender}</p>}
      </section>
    </div>
  );
}

export default App;
