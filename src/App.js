import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{

    if(mode == 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils  - Dark Mode";
      /* Used to get attention of the user. Bad UI UX
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now!';
      }, 1500);
      */
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils  - Light Mode";
    }
  }

  return (
    <>
    {/* <Navbar /> Can be used in case of defaultProps*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <About /> */}
    <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode} />
    </div>
    </>
  );
}

export default App;
