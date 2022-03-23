import React from "react";
import BarChart from "./integrate/BarChart";
import MapInterface from "./integrate/MapInterface";

const Task3 = () => {
  return (
    <div className="flex justify-center items-center p-10 space-x-10">
      <BarChart />
      <MapInterface />
    </div>
  );
};

export default Task3;
