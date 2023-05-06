import React from "react";
import "./Modal.scss";

function Modal({ title, message, onConfirm, onCancel }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__header">
          <h2>{title}</h2>
        </div>
        <div className="modal__body">
          <p>{message}</p>
        </div>
        <div className="modal__footer">
          <button className="modal__button" onClick={onConfirm}>Так</button>
          <button className="modal__button" onClick={onCancel}>Ні</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
