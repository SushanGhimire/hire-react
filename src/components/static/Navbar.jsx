import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-button py-6">
      <div className="flex items-center gap-4 text-2xl font-semibold text-white ">
        <Link to="/">Task 1</Link>
        <Link to="/task-2">Task 2</Link>
        <Link to="/task-3">Task 3</Link>
      </div>
    </div>
  );
};

export default Navbar;
