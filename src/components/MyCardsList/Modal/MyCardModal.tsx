import React from "react";
// styling
import "./Modal.css";
// components
import ImageWithBlurhash from "../../ImageWithBlurhash.tsx";

interface ModalProps {
  title: string;
  description: string;
  image: string;
  closeModal: () => void;
  imageHash: string;
}

const MyCardModal: React.FC<ModalProps> = ({
  title,
  description,
  image,
  closeModal,
  imageHash,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <div className="modal-content">
          <ImageWithBlurhash src={image} hash={imageHash} />
          <h3 className="modal-title">{title}</h3>
          <p className="modal-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCardModal;
