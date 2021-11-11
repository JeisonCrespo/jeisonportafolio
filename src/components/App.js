import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Navigate to="/Home" />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
