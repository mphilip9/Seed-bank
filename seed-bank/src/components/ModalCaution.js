import React, { useState } from "react";

const ModalCaution = ({zone}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <p
        className=" text-white
           pb-4 text-3xl  hover:text-blue-400 hover:cursor-pointer"
        type="button"
        onClick={() => setShowModal(true)}
      >
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
      </p>
      {showModal ? (
        <>
          <div className=" flex pt-40  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-emerald-700 outline-none focus:outline-none">
                <p className="text-white p-2">This app is in beta and only has data for zones 3-8. We would like to account for all zones
                in the lower 48 states. If you know where we can find data to get planting dates by hardiness zones please let us know! Check the about page for contact info. </p>
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

export default ModalCaution;