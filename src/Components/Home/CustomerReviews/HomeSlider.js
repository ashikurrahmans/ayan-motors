import React from "react";

const HomeSlider = () => {
  return (
    <>
      <section
        className="bg-no-repeat bg-cover bg-opacity-90"
        Style="background-image:url(https://www.ayaanmotors.com/admin/uploaded_photos/module_42_css_image.jpg)"
      >
        <div className="bg-[#000000] opacity-80">
          <div className="w-6/12 mx-auto text-center ">
            <div className="text-center p-6 ">
              <h className="lg:text-4xl md:text-3xl sm:text-3xl font-bold text-white">
                Customer Reviews
              </h>
              <p className="text-gray-300">
                Read what our customers have to say
              </p>
            </div>
            <div className="pt-52 pb-20 flex justify-between items-center">
              <button className="text-white outline outline-offset-2 outline-1 px-6 hover:bg-white hover:text-black">
                Google
              </button>
              <button className="text-white outline outline-offset-2 outline-1 px-6 hover:bg-white hover:text-black">
                AuthTrader
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSlider;
