import { useState } from "react";
const SliderRange = () => {
  const [sliderValue, setSliderValue] = useState(10);

  const handleChange = (e) => {
    setSliderValue(e.target.value);
  };
  return (
    <div className="flex flex-col">
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
  );
};

export default SliderRange;
