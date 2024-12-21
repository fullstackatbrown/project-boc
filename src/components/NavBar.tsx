'use client'
import { useEffect, useState } from "react"
import bear_vector from "@/assets/images/bear_vector.svg";

function NavBar() {
    return (
      <div className=" w-screen flex justify-between px-8 py-4 z-10">
        <a href="/"><img src={bear_vector.src} alt="Bear Vector"/></a>
        <div className="flex space-x-5 text-boc_darkbrown py-4 text-xl font-montserrat font-bold">
          <button onClick={handleAboutClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">ABOUT</button>
          <button onClick={handleTripsClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">TRIPS</button>
          <button onClick={handleRentalsClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">RENTALS</button>
        </div>
      </div>
    );
}

const handleAboutClick = () => {
  window.location.href = "/about"
};

const handleTripsClick = () => {
  window.location.href = "/trips"
};

const handleGetInvolvedClick = () => {
  window.location.href = "/get-involved"
};

const handleRentalsClick = () => {
  window.location.href = "/gear-room"
};

const handleContactUsClick = () => {
  window.location.href = "/contact-us"
};

export default NavBar; // Make sure to export the component
