import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');   // whether dark mode is enabled or not 

  const toggleMode = () => {

    if(mode ==='light'){
       setMode('dark');
       document.body.style.backgroundColor='#073f90';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
   <>
    <Navbar 
      title="EC"
      aboutText="About"
      mode={mode}
      toggleMode={toggleMode}
    />
    <div className="container my-3">
    <TextForm 
      heading="Enter the text to analyze below"
      mode={mode}
    />
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;
