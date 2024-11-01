'use client'

function NavBar() {
    return (
        <div className="flex space-x-5 text-boc_darkbrown py-4 text-xl font-montserrat font-bold">
          <button onClick={handleAboutClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">ABOUT</button>
          <button onClick={handleEventsClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">EVENTS</button>
          <button onClick={handleGetInvolvedClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">GET INVOLVED</button>
          <button onClick={handleRentalsClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">RENTALS</button>
          <button onClick={handleContactUsClick} className="hover:text-white hover:bg-boc_slate py-2 px-4 hover:rounded-lg cursor-pointer hover:shadow-gray-700 hover:shadow">CONTACT US</button>
        </div>
    );
}

const handleAboutClick = () => {
    window.location.href = "about";
};

const handleTripsClick = () => {
    window.location.href = "trips";
};

const handleGetInvolvedClick = () => {
    window.location.href = "get-involved";
};

const handleRentalsClick = () => {
    window.location.href = "gear-room";
};

const handleContactUsClick = () => {
    window.location.href = "contact-us";
};

export default NavBar; // Make sure to export the component
