import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Toolbar from "./Components/Toolbar/Toolbar.jsx";


function App() {
  
  const [active, setActive] = useState();

  return (
    <div className="App">
      <Toolbar active={active} setActive= {setActive}/>
      <Sidebar active={active}  setActive= {setActive}/>
    </div>
  );
}

export default App;
