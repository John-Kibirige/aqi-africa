import React from 'react';

const Africa = () => {
  return (
    <div
      className="africa mb-5 mt-2 min-h-[300px] bg-no-repeat bg-contain font-bold text-2xl text-right relative bg-pink-500 flex items-center"
      style={{
        backgroundImage:
          "url('https://simplemaps.com/static/demos/resources//svg-library/svgs/africa.svg')",
        zIndex: '-10',
      }}>
      <h1
        className=" text-white z-10 uppercase text-center
      ">
        Current <span className="underline">Air Quality Index</span> in all
        major cities of african countries
      </h1>

      <div className="overlay absolute w-full h-full bg-pink-500 top-0 left-0 right-0 bottom-0 opacity-80 -z-10"></div>
    </div>
  );
};

export default Africa;
