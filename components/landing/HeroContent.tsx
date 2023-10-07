import Connect4 from "../Connect4";

const HeroContent = () => {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <div className="w-full h-full">
      {/* You can remove all of this */}
      <div className="flex flex-col w-full h-full">
        <p className="text-2xl text-center">Write your html/css/js here</p>
        <div className="mx-auto">
          <button
            onClick={handleClick}
            className="py-2 px-4 rounded border border-black m-8 text-xl hover:bg-gray-400"
          >
            Test Button
          </button>
        </div>
        <Connect4 />
      </div>
      {/* You can remove all of this */}
    </div>
  );
};

export default HeroContent;
