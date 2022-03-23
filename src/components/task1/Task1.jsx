import SliderRange from "./integrate/SliderRange";
import ButtonLoader from "./integrate/ButtonLoader";

const Task1 = () => {
  return (
    <div className="flex flex-col p-10 items-center gap-4 justify-center">
      <SliderRange />
      <ButtonLoader />
    </div>
  );
};

export default Task1;
