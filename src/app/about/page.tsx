'use client';
import NavBar from "../components/NavBar";

export default function About() {
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

                <div id="paragraph" className="mx-60 mb-8 text-xl font-[100] text-left leading-10">
                    <p> The BOC runs everything from <span className="font-bold">local walks</span> to <span className="font-bold">backpacking weekends, </span>
                    to <span className="font-bold">local bike rides, </span> to <span className="font-bold">kayaking</span> to <span className="font-bold">day hikes </span> 
                    to <span className="font-bold">climbing</span> to <span className="font-bold">skiing</span> and everything in between! 
                    The fall break and spring break <span className="font-bold">backpacking</span> trips are the BOC’s longest trips, going to Adirondack, 
                    the Blue Ridge, and the White Mountains in recent years. Some of our most popular trips are our short 
                    walks and outdoor social events. Several subsidized <span className="font-bold">ski trips</span> take place every winter, and local 
                    <span className="font-bold"> whitewater rafting</span> trips occur in the spring and fall.
                    </p>
                </div>

                <div id="paragraph2" className="mx-60 mb-8 text-xl font-[100] text-left leading-10">
                    <p> Every year, the club offers classes in climbing and backpacking skills. The BOC also runs periodic service 
                        trips to improve the public’s experience in the outdoors, especially in Rhode Island.
                    </p>
                </div>

                <div id="paragraph3" className="mx-60 mb-8 text-xl font-[100] text-left leading-10">
                    <p> Every year, the club offers classes in climbing and backpacking skills. The BOC also runs periodic service 
                        trips to improve the public’s experience in the outdoors, especially in Rhode Island.
                    </p>
                </div>

                <div id="paragraph4" className="mx-60 mb-8 text-xl font-[100] text-left leading-10">
                    <p> If you’re interested in the community, challenge, and regeneration that the outdoors offer, join our mailing 
                        list that includes over 3,000 members of the Brown community—faculty, graduate students, and undergraduate 
                        students included. If you’d like to support our mission of getting more students outside, click here to 
                        donate to the BOC!
                    </p>
                </div>

            </div>
            
            <div className="flex justify-center">
            </div>
        </div>
        <div className="mb-[5vh]"></div>
    </div>);
}

