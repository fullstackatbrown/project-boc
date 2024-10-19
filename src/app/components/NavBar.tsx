'use client'
import { useEffect, useState } from "react"

function NavBar() {
    return (
        <nav className="bg-splash_page_background">
          <ul className="flex justify-center space-x-6 text-white py-4 text-lg font-montserrat font-semibold">
            <li className="hover:text-gray-200 cursor-pointer">ABOUT</li>
            <li className="hover:text-gray-200 cursor-pointer">EVENTS</li>
            <li className="hover:text-gray-200 cursor-pointer">GET INVOLVED</li>
            <li className="hover:text-gray-200 cursor-pointer">RENTALS</li>
            <li className="hover:text-gray-200 cursor-pointer">CONTACT US</li>
          </ul>
        </nav>
    );
}
export default NavBar; // Make sure to export the component