import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import "./Toolbar.scss";
import Search from "../Search/Search";
import { notesContext } from "../../Context/Context";
import Modal from "../Modal/Modal";

function Toolbar({ active, setActive }) {
  const data = useContext(notesContext);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true); // відкрийте модальне вікно підтвердження
  };

  const handleConfirmDelete = () => {
    data.deleteNotes(active);
    setActive();
    setShowModal(false); // закрийте модальне вікно після видалення
  };

  const handleCancelDelete = () => {
    setShowModal(false); // закрийте модальне вікно при відмові видалення
  };

  return (
    <div className="Toolbar">
      <div className="Toolbar-buttons">
        <div>
          <Button icon="add" state={false} />
        </div>
        <div onClick={() => handleDelete()}>
          <Button 
            icon="trash alternate outline"
            state={active ? false: true}
          />
        </div>
        <div>
          <Button icon="edit" state={true} />
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
