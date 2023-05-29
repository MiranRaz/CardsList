import React, { useState, useEffect } from "react";
// styling
import "./TheCards.css";
// components
import MyCardModal from "../Modal/MyCardModal.tsx";
import ImageWithBlurhash from "../../ImageWithBlurhash.tsx";

interface CardProps {
  title: string;
  description: string;
  image: string;
  imageHash: string;
}

const MyCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageHash,
}) => {
  // modal
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  return (
    <>
      <div className="card">
        <ImageWithBlurhash src={image} hash={imageHash} />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <button
          className="card-button"
          onClick={() => setModalOpen(!modalOpen)}
        >
          Learn more
        </button>
      </div>

      {modalOpen && (
        <MyCardModal
          title={title}
          description={description}
          image={image}
          imageHash={imageHash}
          closeModal={() => setModalOpen(!modalOpen)}
        />
      )}
    </>
  );
};

export default MyCard;
