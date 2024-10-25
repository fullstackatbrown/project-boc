'use client'

function NavBar() {
    return (
        <nav>
          <ul className="flex justify-center space-x-6 text-white py-4 text-lg font-montserrat font-semibold">
            <li onClick={handleAboutClick} className="hover:text-gray-200 cursor-pointer">ABOUT</li>
            <li onClick={handleTripsClick} className="hover:text-gray-200 cursor-pointer">TRIPS</li>
            <li onClick={handleGetInvolvedClick} className="hover:text-gray-200 cursor-pointer">GET INVOLVED</li>
            <li onClick={handleRentalsClick} className="hover:text-gray-200 cursor-pointer">RENTALS</li>
            <li onClick={handleContactUsClick} className="hover:text-gray-200 cursor-pointer">CONTACT US</li>
          </ul>
        </nav>
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
