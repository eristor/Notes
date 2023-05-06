import React from "react";
import "./Button.scss";
import { Icon } from "semantic-ui-react";

function Button({ icon, state }) {
  return (
    <div className="Button">
      <Icon disabled={state} name={icon} />
    </div>
  );
}

export default Button;
