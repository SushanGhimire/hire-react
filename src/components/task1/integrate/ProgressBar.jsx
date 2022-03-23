import React from "react";
import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(50);

  const progressHandler = () => {
    progress === 50 ? setProgress(100) : setProgress(50);
  };
  return (
    <div className="py-10">
      <div className="flex space-x-4 items-end">
        {/* progress bar  */}
        <div>
          <label htmlFor="">Progress</label>
          <div className={`w-64 relative bg-gray-200 h-5 rounded-full`}>
            <span
              className="absolute h-full bg-button rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: `${progress}%`,
              }}
            ></span>
          </div>
        </div>
        <button
          className="bg-button text-white text-xs py-1 w-24"
          onClick={progressHandler}
        >
          {progress === 50 ? "Fill Bar" : "Undo Fill"}
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
