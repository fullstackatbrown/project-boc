'use client';
import NavBar from "../../components/NavBar";
import ExecutiveLeadership from '../MeetOurTeam/ExecutiveLeadership'; // Adjust the path as needed
import bear_vector from "../../imgs/bear_vector.svg";
import WhiteWaterBanner from "../../components/WhiteWaterBanner";

export default function About() {
    return (
    <div className="h-full min-h-screen w-full">
      <div className=" w-screen flex justify-between px-8 py-4 z-10">
        <img src={bear_vector.src} alt="Bear Vector" />
        <NavBar></NavBar>
      </div>
        {/* Dynamic spacer based on header height */}
        <div style={{ minHeight: `5px` }}></div>

        {/* Site content */}
        <WhiteWaterBanner
            text="MEET OUR TEAM"
        ></WhiteWaterBanner>


        <div id="content" className="text-center p-5">
            <ExecutiveLeadership />
            <div>
                <img 
                    src="/images/about/AboutRiver2.png"
                    className="w-3/5 mx-auto mb-8"
                />
            </div>
            <div className="flex justify-center">
            </div>
        </div>
        <div className="mb-[5vh]"></div>
    </div>);
}

const handleMailClick = () => {
    alert("Redirect to Mail Form");
};
