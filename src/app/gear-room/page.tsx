'use client';
import NavBar from "../components/NavBar";
import Schedule from "./schedule";

export default function GearRoom() {
    return (
    <div className="h-full min-h-screen w-full">
        <div>
            <NavBar></NavBar>
        </div>
        {/* Dynamic spacer based on header height */}
        <div style={{ minHeight: `5px` }}></div>

        {/* Site content */}
        <div id="content" className="text-center p-5">
            <div id="title-text" className="mt-[5vh] mb-4 text-4.5xl-responsive font-bold text-primary font-circ-std">
                Data Download
                <div id="explanation" className="mb-8 text-lg font-[100]">
                    Fill out the form to request a download link.
                </div>
            </div>
            <Schedule />
            <div className="flex justify-center">
            </div>
        </div>
        
        <div className="mb-[5vh]"></div>
    </div>);
}

