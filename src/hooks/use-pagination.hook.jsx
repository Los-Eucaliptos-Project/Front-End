import { useState } from 'react';

function usePagination(initialPage = 1, itemsPerPage = 9) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  return {
    currentPage,
    setCurrentPage,
    onPageChange,
    resetPagination,
    itemsPerPage,
  };
}

export default usePagination;
