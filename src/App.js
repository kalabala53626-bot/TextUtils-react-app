import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import About from "./component/About";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')

  // Show alert masg usestate method
  const [alert, setAlart] = useState(null);
  const showAlart = (message, type) =>{
      setAlart({
          msg: message,
          type: type
      })
      setTimeout(() => {
        setAlart(null);
      }, 1500);
  }

  const togglemode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(57, 70, 83)';
      showAlart("Dark Mode is on", "success");
      // setInterval(() => {
      //   document.title = 'I am new'
      // }, 1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlart("Light Mode is on", "success");
    }
  }

  
  const red_color = () => {
    setmode("danger");
    document.body.style.backgroundColor = "#dc3545b0";
    document.body.style.color = "white";
  };

  // 🟢 Green Mode Function
  const green_color = () => {
    setmode("success");
    document.body.style.backgroundColor = "#35dc5fb0";
    document.body.style.color = "white";
  };

  // 🟡 Yellow Mode Function
  const Yellow_color = () => {
    setmode("warning");
    document.body.style.backgroundColor = "#eae137b0";
    document.body.style.color = "black";
  };


  
  return (
    <>
    
      <Navbar
        title="Textutils"
        titleAbout="About Us"
        mode={mode}
        togglemode={togglemode}
        red_color={red_color}
        green_color={green_color}
        Yellow_color={Yellow_color}
      />
      <Alert alert={alert} />

     
       <TextForm heading="Type Something Here:" mode={mode} showAlart={showAlart} />
       
    </>   
      
  );
  
  // return (
  //   <Router>
  //     <Navbar
  //       title="Textutils"
  //       titleAbout="About Us"
  //       mode={mode}
  //       togglemode={togglemode}
  //       red_color={red_color}
  //       green_color={green_color}
  //       Yellow_color={Yellow_color}
  //     />
  //     <Alert alert={alert} />

  //     <Routes>
  //       <Route exact path="/" element={<TextForm heading="Type Something Here:" mode={mode} showAlart={showAlart} />} />
  //       <Route exact path="/About" element={<About mode={mode} />} />
  //     </Routes>
  //   </Router>
  // );
}

export default App;