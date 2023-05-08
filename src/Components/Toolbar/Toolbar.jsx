import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import "./Toolbar.scss";
import Search from "../Search/Search";
import { notesContext } from "../../Context/Context";
import Modal from "../Modal/Modal";

function Toolbar({ active, setActive, setReadonly }) {
  const data = useContext(notesContext);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true); 
  };

  const handleConfirmDelete = () => {
    data.deleteNotes(active.id);
    setActive({});
    setShowModal(false); 
  };

  const handleCancelDelete = () => {
    setShowModal(false); 
  };

  return (
    <div className="Toolbar">
      <div className="Toolbar-buttons">
        <div onClick={() => data.createEmptyRecords()}>
          <Button icon="add" state={false} />
        </div>
        <div onClick={() => handleDelete()}>
          <Button 
            icon="trash alternate outline"
            state={active.id ? false: true}
          />
        </div>
        <div onClick={() => {active.id ? setReadonly(res => !res) : setReadonly(false)}}>
          <Button icon="edit" state={active.id ? false: true} />
        </div>
      </div>
      <Search />
      {showModal && (
        <Modal
          title="Підтвердження видалення"
          message="Ви впевнені, що бажаєте видалити цей запис?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default Toolbar;
