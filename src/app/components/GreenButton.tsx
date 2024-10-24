"use client";
import { useEffect, useState } from "react";

function GreenButton(props: { text: string; onClick: () => void }) {
  const { text, onClick } = props;
  
  return (
    <button
      onClick={onClick}
      className={`bg-dark_green hover:bg-green-700 text-white font-montserrat font-bold py-2 px-5 rounded`}
    >
      {text}
    </button>
  );
}
export default GreenButton; // Make sure to export the component
