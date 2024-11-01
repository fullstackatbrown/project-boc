'use client'
import { useEffect, useState } from "react"

function NavBar() {
    return (
        <div className="flex space-x-5 text-boc_darkbrown py-4 text-xl font-montserrat font-bold">
          <button onClick={handleAboutClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">ABOUT</button>
<<<<<<< HEAD
          <button onClick={handleEventsClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">EVENTS</button>
=======
          <button onClick={handleTripsClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">EVENTS</button>
>>>>>>> 4df74088be6dc9698ff67e4e944fc159b39a9c14
          <button onClick={handleGetInvolvedClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">GET INVOLVED</button>
          <button onClick={handleRentalsClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">RENTALS</button>
          <button onClick={handleContactUsClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">CONTACT US</button>
        </div>
    );
}

const handleAboutClick = () => {
  alert("Redirect to About Page");
};

const handleTripsClick = () => {
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