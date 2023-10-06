import React from "react";

const HeroContent = () => {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <div className="w-full h-full">
      {/* You can remove all of this */}
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="text-2xl text-center">Write your html/css/js here</p>
        <button
          onClick={handleClick}
          className="rounded border border-black m-8 text-xl"
        >
          Test Button
        </button>
      </div>
      {/* You can remove all of this */}
    </div>
  );
};

export default HeroContent;
