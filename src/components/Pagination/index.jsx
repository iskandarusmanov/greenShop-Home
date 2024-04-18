import React, { useState, useEffect, useMemo } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationList = ({ data, changePagination }) => {
  const [pagination, setPagination] = useState({
    startLimit: 0,
    endLimit: 9,
    activePage: 1,
  });

  useEffect(() => {
    setPagination({
      startLimit: 0,
      endLimit: 9,
      activePage: 1,
    });
    changePagination(0, 9, 1);
  }, [data]);

  const paginationNumbers = useMemo(() => {
    const pageLimit = Math.ceil(data.length / 9);
    const numbers = [];

    for (let i = 1; i <= pageLimit; i++) {
      numbers.push(i);
    }

    return numbers;
  }, [data.length]);

  const handlePagination = (e, num) => {
    const activePage = num;
    const startLimit = (num - 1) * 9;
    const endLimit = startLimit + 9;

    changePagination(startLimit, endLimit, activePage);

    setPagination({
      startLimit,
      endLimit,
      activePage,
    });
  };

  return (
    <div className={`flex gap-2 float-end mt-[50px]`}>
      <Stack spacing={2}>
        <Pagination
          count={paginationNumbers.length}
          variant="outlined"
          shape="rounded"
          page={pagination.activePage}
          onChange={handlePagination}
        />
      </Stack>
    </div>
  );
};

export default PaginationList;
