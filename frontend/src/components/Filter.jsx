import React from "react";

const Filter = () => {
  return (
    <div>
      <div>
        <input type="text" className="w-32" placeholder="Tìm kiếm..." />
      </div>
      <ul>
        <li>Rèm gia đình</li>
        <li>Rèm văn phòng</li>
        <li>Rèm tự động</li>
        <li>Rèm chuyên dụng</li>
        <li>Phụ kiện rèm</li>
        <li>Sản phẩm khác</li>
      </ul>
    </div>
  );
};

export default Filter;
