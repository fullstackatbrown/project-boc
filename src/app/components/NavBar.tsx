'use client'
import { useEffect, useState } from "react"

function NavBar() {
    return (
        <nav>
          <ul className="flex justify-center space-x-6 text-white py-4 text-lg font-montserrat font-semibold">
            <li onClick={handleAboutClick} className="hover:text-gray-200 cursor-pointer">ABOUT</li>
            <li onClick={handleEventsClick} className="hover:text-gray-200 cursor-pointer">EVENTS</li>
            <li onClick={handleGetInvolvedClick} className="hover:text-gray-200 cursor-pointer">GET INVOLVED</li>
            <li onClick={handleRentalsClick} className="hover:text-gray-200 cursor-pointer">RENTALS</li>
            <li onClick={handleContactUsClick} className="hover:text-gray-200 cursor-pointer">CONTACT US</li>
          </ul>
        </nav>
    );
}

const handleAboutClick = () => {
  alert("Redirect to About Page");
};

const handleEventsClick = () => {
  alert("Redirect to Trips Page");
};

const handleGetInvolvedClick = () => {
  alert("Redirect to Get Involved Page");
};

const handleRentalsClick = () => {
  alert("Redirect to Rentals Page");
};

const handleContactUsClick = () => {
  alert("Redirect to Contact Us Page");
};

export default NavBar; // Make sure to export the component