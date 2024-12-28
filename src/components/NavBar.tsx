"use client";
import { useEffect, useState } from "react";
import bear_vector from "@/assets/images/bear_vector.svg";

function NavButton({ text, func }) {
  return (
    <button
      onClick={func}
      className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow"
    >
      {text}
    </button>
  );
}

function NavBar() {
  return (
    <div className=" w-screen flex justify-between px-8 py-4 z-10">
      <img
        onClick={handleHomeClick}
        src={bear_vector.src}
        alt="Bear Vector"
        className="cursor-pointer"
      />
      <div className="flex space-x-5 text-boc_darkbrown py-4 text-xl font-montserrat font-bold">
        <NavButton text="HOME" func={handleHomeClick} />
        <NavButton text="ABOUT" func={handleAboutClick} />
        <NavButton text="RENTALS" func={handleRentalsClick} />
        <NavButton text="CONTACT" func={handleContactUsClick} />
      </div>
    </div>
  );
}

const handleHomeClick = () => {
  window.location.href = "/";
};

const handleAboutClick = () => {
  window.location.href = "/about";
};

const handleTripsClick = () => {
  window.location.href = "/trips";
};

const handleGetInvolvedClick = () => {
  window.location.href = "/get-involved";
};

const handleRentalsClick = () => {
  window.location.href = "/gear-room";
};

const handleContactUsClick = () => {
  window.location.href = "/contact-us";
};

export default NavBar; // Make sure to export the component
