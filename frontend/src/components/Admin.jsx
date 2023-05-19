import React from "react";
import CreateFeaturedProducts from "./CreateFeaturedProducts";

const Admin = () => {
  return (
    <div className="pt-[128px] px-16">
      {/* <h1>Hello {location.state.id} and welcome to the admin</h1> */}
      <CreateFeaturedProducts />
    </div>
  );
};

export default Admin;
