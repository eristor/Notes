import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Toolbar from "./Components/Toolbar/Toolbar.jsx";

function App() {
  const [active, setActive] = useState({
    id: null,
    Date: null,
    Time: null,
    Title: "",
    Text: "",
  });
  const [readonly, setReadonly] = useState(true);
  
  return (
    <div className="App">
      <Toolbar
        active={active}
        setActive={setActive}
        readonly={readonly}
        setReadonly={setReadonly}
      />
      <Sidebar
        active={active}
        setActive={setActive}
        readonly={readonly}
        setReadonly={setReadonly}
      />
    </div>
  );
}

export default App;
