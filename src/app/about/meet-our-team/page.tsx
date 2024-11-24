'use client';
import NavBar from "@/components/NavBar";
import ExecutiveLeadership from './ExecutiveLeadership'; // Adjust the path as needed
import WhiteWaterBanner from "@/components/WhiteWaterBanner";

export default function About() {
    return (
    <div className="h-full min-h-screen w-full">
        <NavBar></NavBar>
        {/* Dynamic spacer based on header height */}
        <div style={{ minHeight: `5px` }}></div>

        {/* Site content */}
        <WhiteWaterBanner
            text="MEET OUR TEAM"
        ></WhiteWaterBanner>


        <div id="content" className="text-center p-5">
            <ExecutiveLeadership />
            <div className="flex justify-center">
            </div>
        </div>
        <div className="mb-[5vh]"></div>
    </div>);
}

const handleMailClick = () => {
    alert("Redirect to Mail Form");
};
