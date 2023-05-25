import React from "react";

const Pagination = (props) => {
  const { pagination, onPageChange, featuredProductsLength } = props;
  const { page, limit } = pagination;
  const totalPages = Math.ceil(featuredProductsLength / limit);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="mr-2 border border-solid border-slate-300 p-2"
        disabled={page <= 1}
        onClick={() => {
          handlePageChange(page - 1);
        }}
      >
        Trang truoc
      </button>
      {numbers.map((number, index) => (
        <button
          key={index}
          className={`active: ${
            page === number ? "bg-[#ab7a5f]" : ""
          } border border-solid border-slate-300 p-2 active:text-white`}
          onClick={() => {
            handlePageChange(number);
          }}
        >
          {number}
        </button>
      ))}
      <button
        className="ml-2 border border-solid border-slate-300 p-2"
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Trang sau
      </button>
    </div>
  );
};

export default Pagination;
