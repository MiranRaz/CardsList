import React from "react";
// styling
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  cardsPerPage: number;
  totalCards: number;
  onPageChange: (pageNumber: number) => void;
}

const MyPagination: React.FC<PaginationProps> = ({
  currentPage,
  cardsPerPage,
  totalCards,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination-button ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="pagination-container">
      <div className="pagination-buttons">{renderPaginationButtons()}</div>
    </div>
  );
};

export default MyPagination;
