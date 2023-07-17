
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/navbar';
import Alert from './components/Alert';
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d141d';
      showAlert("Dark mode Enabled", "Success");

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Ligth mode Enabled", "Success");

    }
  }

  //This method is alert component
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }



  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode} />
      <Alert alert={alert} />
        <TextForm
          showAlert={showAlert}
          heading="Enter Text to analyze "
          mode={mode}/>

      </>
      );
}

      export default App;
