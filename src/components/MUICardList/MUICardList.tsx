import React, { useState, useEffect } from "react";
// mui
import { Grid } from "@mui/material";
// api
import { cardData } from "../../API/MyCardsData.ts";
// components
import MUICard from "./MUICard.tsx";
import MUIPagination from "./Pagination/MUIPagination.tsx";

const MUICardsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(10); // Initial value

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const updateCardsPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 600) {
      setCardsPerPage(8);
    } else if (screenWidth <= 1024) {
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
      <Grid item xs={6} sm={4} md={2.4} key={card.id}>
        <MUICard
          title={card.title}
          description={card.description}
          image={card.image}
          imageHash={card.hash}
        />
      </Grid>
    ));
  };

  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{ padding: "20px" }}
    >
      {renderCards()}
      <Grid item xs={12}>
        <MUIPagination
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          totalCards={cardData.length}
          onPageChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
};

export default MUICardsList;
