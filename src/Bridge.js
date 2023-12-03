import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import TodolistAssignment from "./pages/TodolistAssignment";
import Header from "./Components/Header";
import TableAssignment from "./pages/TableAssignment";
import Footer from "./Components/Footer";
import Search from "./pages/Search";
import Home from "./pages/Home";


const Bridge = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodolistAssignment />} />
          <Route path="/searchbar" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dtable" element={<TableAssignment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Bridge;
