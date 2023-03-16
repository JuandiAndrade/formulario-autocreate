import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
