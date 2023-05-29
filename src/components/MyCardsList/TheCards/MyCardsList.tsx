import React, { useState, useEffect } from "react";
// styling
import "./TheCards.css";
// api
import { cardData } from "../../../API/MyCardsData.ts";
// components
import MyCard from "./MyCard.tsx";
import MyPagination from "../Pagination/MyPagination.tsx";

const MyCardsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(10); // Initial value

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const updateCardsPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 600) {
      setCardsPerPage(8);
    } else if (screenWidth <= 1200) {
      setCardsPerPage(9);
    } else {
      setCardsPerPage(10);
    }
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cardsToRender = cardData.slice(startIndex, endIndex);

    return cardsToRender.map((card) => (
      <MyCard
        key={card.id}
        title={card.title}
        description={card.description}
        image={card.image}
        imageHash={card.hash}
      />
    ));
  };

  return (
    <div className="cards-container">
      <div className="card-list">{renderCards()}</div>
      <MyPagination
        currentPage={currentPage}
        cardsPerPage={cardsPerPage}
        totalCards={cardData.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MyCardsList;
