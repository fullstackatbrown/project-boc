"use client";
import { useEffect, useState } from "react";

function GreenButton(props: { text: string; onClick: () => void }) {
  const { text, onClick } = props;
  
  return (
    <button
      onClick={onClick}
      className={`bg-boc_darkgreen hover:bg-boc_slate text-lg text-white font-montserrat font-bold py-2 rounded-xl shadow-gray-700 shadow-md px-9`}
    >
      {text}
    </button>
  );
}
export default GreenButton; // Make sure to export the component
