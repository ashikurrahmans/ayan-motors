import React from "react";

const SingleHero = () => {
  return (
    <>
      <div
        className="relative h-[600px] w-max-xl flex items-end justify-start text-left bg-cover bg-center"
        Style="background-image:url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=);"
      >
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>

        <main className="p-5 z-10 text-center mx-auto">
          <h1 className="text-3xl text-white font-bold">Finance</h1>
          <p
            className=" tracking-tight leading-7
                  font-regular text-gray-300 mb-4 text-base"
          >
            Abdullah Abdullah's Presidential Election Campaign
          </p>
          <button className="duration-500 bg-black text-white py-4 px-20 uppercase rounded-lg text-bold hover:bg-white hover:text-black mb-2">
            More Info
          </button>
        </main>
      </div>
    </>
  );
};

export default SingleHero;
