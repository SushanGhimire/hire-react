import React from "react";
import { useState } from "react";

const Task1 = () => {
  const [sliderValue, setSliderValue] = useState(10);

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };
  return (
    <div className="p-10">
      <div className="flex items-center gap-4 justify-center">
        <div class="flex flex-col">
          <label htmlFor="">Slider Range</label>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            name="sliderValue"
            step={5}
            onChange={handleChange}
          />
          <span>{sliderValue}</span>
        </div>
      </div>
    </div>
  );
};

export default Task1;
