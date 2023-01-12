import React, { useState } from "react";

const ModalZone = ({ zone }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className=" text-white
      font-bold text-2xl px-6 py-3 rounded-full bg-forest dark:bg-black  hover:text-blue-400 hover:cursor-pointer"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Current Hardiness Zone: {zone}
      </button>
      {showModal ? (
        <>
          <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-emerald-700 outline-none focus:outline-none">
                <img
                  className="object-scale-down max-h-1/2"
                  alt="USDA hardiness zone map"
                  src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/find-your-USDA-gardening-zone-hero.jpg"
                ></img>
                <p className="text-white p-2">
                  The USDA Plant Hardiness Zone Map is the standard by which
                  gardeners and growers can determine which plants are most
                  likely to thrive at a location. The map is based on the
                  average annual minimum winter temperature, divided into
                  10-degree F zones. There are further sub divisions using the
                  letters b and a to represent differences of 5 degrees. This
                  app will find your hardiness zone to the sub division, but it
                  only accounts for differences in major zones.
                </p>
                <div className="self-center relative p-6 flex-auto">
                  <button
                    className="text-emerald-700 bg-red-400  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalZone;
