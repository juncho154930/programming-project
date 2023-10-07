import React, { useState } from "react";

const Connect4 = () => {
  const [boxColors, setBoxColors] = useState(new Array(100).fill("bg-red-200"));

  const handleBoxClick = (index: number) => {
    const updatedBoxColors = [...boxColors];
    updatedBoxColors[index] = "bg-red-500";
    setBoxColors(updatedBoxColors);
  };

  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < 100; i++) {
      rows.push(
        <div
          className={`w-12 h-12 ${boxColors[i]}`}
          key={i}
          onClick={() => handleBoxClick(i)}
        ></div>
      );
    }

    return <div className="grid grid-cols-10 gap-4 p-4">{rows}</div>;
  };
  return (
    <div>
      <p className="text-xl text-center font-bold">Connect 4</p>
      {renderRows()}
    </div>
  );
};

export default Connect4;
