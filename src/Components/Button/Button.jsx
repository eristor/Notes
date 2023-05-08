import React from "react";
import "./Button.scss";
import { Icon } from "semantic-ui-react";

function Button({ icon, state, color }) {

  
  return (
    <div className="Button" >
      <Icon disabled={state} name={icon} color={color}/>
    </div>
  );
}

export default Button;
