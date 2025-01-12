// pages/home.tsx
import React, { useState } from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default Home;
