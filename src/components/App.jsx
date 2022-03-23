import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "./common/Error404";
import Navbar from "./static/Navbar";
import Task1 from "./task1/Task1";
import Task2 from "./task2/Task2";
import Task3 from "./task3/Task3";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task-2" element={<Task2 />} />
        <Route path="/task-3" element={<Task3 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
