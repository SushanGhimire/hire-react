import React, { useState } from "react";

const ButtonLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const buttonClicked = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  return (
    <div>
      <div>
        <button
          className="bg-button text-white w-32 py-2 text-xl"
          onClick={buttonClicked}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            "Click me"
          )}
        </button>
      </div>
    </div>
  );
};

export default ButtonLoader;
