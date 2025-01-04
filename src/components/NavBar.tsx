"use client";
import bear_vector from "@/assets/images/bear_vector.svg";
import SignIn from "@/components/SignIn";

function NavButton(props: { children: React.ReactNode, func: () => void }) {
  return (
    <button
      onClick={props.func}
      className="hover:text-white hover:bg-boc_slate py-2 
      px-4 hover:rounded-lg cursor-pointer 
      hover:shadow-gray-700 hover:shadow"
    >
      {props.children}
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
      <div
        className="flex space-x-5 text-boc_darkbrown py-4 
      text-xl font-montserrat font-bold align-center"
      >
        <NavButton func={handleHomeClick}>HOME</NavButton>
        <NavButton func={handleAboutClick}>ABOUT</NavButton>
        <NavButton func={handleTripsClick}>TRIPS</NavButton>
        <NavButton func={handleRentalsClick}>RENTALS</NavButton>
        <NavButton func={handleContactUsClick}>CONTACT</NavButton>
        <SignIn />
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
