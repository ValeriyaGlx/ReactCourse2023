import './App.css';
import { useState } from "react";
import InitialForm from './components/InitialForm/InitialForm';
import {changeValidation} from './utils/validation'

function App() {
  const [newform, setNewform] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    const test = changeValidation();
    if(test===0){
      setNewform(true)
    }
  }

  return (
<InitialForm
onSubmit = {onSubmit}
newform={newform}
/>
  );
}

export default App;
