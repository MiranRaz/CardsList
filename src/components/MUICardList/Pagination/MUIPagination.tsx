import React from "react";
// mui
import { Pagination, Stack } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  cardsPerPage: number;
  totalCards: number;
  onPageChange: (pageNumber: number) => void;
}

const MUIPagination: React.FC<PaginationProps> = ({
  currentPage,
  cardsPerPage,
  totalCards,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <Stack
      spacing={2}
      sx={{ display: "flex", alignItems: "center", width: "100%" }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_event, page) => handlePageChange(page)}
      />
    </Stack>
  );
};

export default MUIPagination;
