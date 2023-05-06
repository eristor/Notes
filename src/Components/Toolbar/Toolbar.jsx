import React from "react";
import Button from "../Button/Button";
import "./Toolbar.scss";
import  Search  from "../Search/Search";

function Toolbar() {
  return (
    <div className="Toolbar">
      <div className="Toolbar-buttons">
        <Button icon="add" state = {false}/>
        <Button icon="trash alternate outline" state = {true}/>
        <Button icon="edit" state = {true}/>
      </div>
      <Search />
    </div>
  );
}

export default Toolbar;
