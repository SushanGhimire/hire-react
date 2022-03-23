import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "./common/Error404";
import Task1 from "./task1/Task1";
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
