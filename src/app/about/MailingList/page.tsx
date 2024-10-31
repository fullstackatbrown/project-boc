"use client";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import Subscribe from "../../components/WhiteButton";

export default function MailingList() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add email submission logic here, e.g., API call
        console.log("Email submitted:", email);
    };

    return (
        <div className="h-full min-h-screen w-full flex flex-col items-center">
            <div className="w-full">
                <NavBar />
            </div>

            {/* Dynamic spacer based on header height */}
            <div style={{ minHeight: `5px` }}></div>

            {/* Centered content */}
            <div className="text-center w-3/4 max-w-2xl mt-12">
                <h1 className="mb-8 text-black text-6xl font-bold leading-10">
                    Join our mailing list!
                </h1>
                <p id="paragraph" className="text-xl font-light leading-8 mb-12">
                    You will receive one weekly newsletter email informing you of the trips going out for the week. We don't spam—we promise! :-)
                </p>

                {/* Centered email form */}
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                <input
                    type="email"
                    placeholder="Enter your .edu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-4 rounded-lg w-full mb-4 max-w-md"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.edu$"
                    title="Please enter a .edu email address"
                />
                <Subscribe
                    text="Subscribe"
                    className="w-full max-w-md"
                />
                </form>
            </div>
        </div>
    );
}
