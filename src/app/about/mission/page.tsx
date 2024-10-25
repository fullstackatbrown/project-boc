'use client';
import NavBar from "../../components/NavBar";

export default function Mission() {
    return (
        <div className="h-full min-h-screen w-full">
            <div>
                <NavBar></NavBar>
            </div>
            {/* Dynamic spacer based on header height */}
            <div style={{ minHeight: `5px` }}></div>

            {/* Site content */}
            <div style={{
                backgroundPosition: 'center', // Adjust as needed
                backgroundSize: 'cover', // Ensure the image covers the entire element
                minHeight: '75vh', // Ensure image covers the entire viewport
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/about/mission/missionCanoe.jpeg')"
            }}>

                <div className="flex flex-col w-[60vw] h-[75vh] justify-end bg-center bg-cover mx-auto pb-10">
                    <h1 className="text-white text-6xl font-bold mb-6 text-left">
                        Our Mission
                    </h1>
                    <p className="text-white text-xl leading-relaxed text-left">
                        We, the Board of the Brown Outing Club, will abide by the following values,
                        and use them as guiding principles for the short and long-term goals of the club (F.A.C.E.S.):
                    </p>
                </div>
            </div>


            <div className="flex flex-col justify-center font-circ-std">
                <div className="w-[60vw] min-w-[500px] flex flex-col gap-y-5 mx-auto pb-20">
                    <div className="mt-10">
                        <h3 className="text-2xl mb-5  font-bold">Fun</h3>
                        <p className="ml-10 text-wrap text-lg leading-10">
                            afford the Brown community with safe and enjoyable recreation and social
                            interaction where participants can be themselves, take healthy risks, and
                            find a change of pace from the campus environment;
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-5 font-bold">Accessibility</h3>
                        <p className="ml-10 text-wrap text-lg leading-10">
                            acknowledge the myriad barriers to outdoor recreation and facilitate access for
                            Brown community members of all identities, backgrounds, experience levels, and
                            financial circumstances; actively reach individuals and groups who might not otherwise get outside;
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-5 font-bold">Community</h3>
                        <p className="ml-10 text-wrap text-lg leading-10">
                            foster social interaction and interpersonal connection by encouraging collaboration
                            and creating an inclusive, synergistic relationship between leaders and participants;
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-5 font-bold">Experience</h3>
                        <p className="ml-10 text-wrap text-lg leading-10">
                            craft spaces in which leaders and participants can have meaningful interactions with
                            themselves, their peers, and the surrounding environment;
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-5 font-bold">Service</h3>
                        <p className="ml-10 text-wrap text-lg leading-10">
                            serve the Brown community by providing opportunities to get off campus and
                            develop skills in a variety of outdoor pursuits; instill respect for natural
                            places, a commitment to Leave No Trace ethics, and best practices for environmental stewardship.
                        </p>
                    </div>
                </div>
            </div>
        </div>);
}
