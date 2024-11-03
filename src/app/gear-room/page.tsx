'use client';
import NavBar from "../components/NavBar";
import Schedule from "./schedule"
import "./gear-room.css"

export default function GearRoom() {
    return (
        <div className="h-full min-h-screen w-full">
        {/* Dynamic spacer based on header height */}
        <div style={{ minHeight: `5px` }}></div>

        {/* Site content */}
        <div id="content" className="site-content">
            <div id="primary" className="content-area">
                <main id="main" className="site-main">
                    <header className="entry-header">
                        <h1 className="entry-title">Gear Room</h1>
                    </header>
                    <div className="entry-content">
                        The BOC has a gear room in the ground floor of the Campus Center (directions below), 
                            where we have a large selection of outdoor gear. We use these items for the trips we sponsor, 
                            but we also offer the opportunity for students to rent out gear from us. If you’re interested in renting 
                            gear for your own trip with friends, we also provide consulting about what you might need, how to plan your trip, 
                            and any other questions. If you’re interested in renting gear, or just want to come see our selection and learn 
                            about how to use things, come visit our gear room during open hours!
                    </div>
                    <h2>Gear Room Open Hours:</h2>
                    <p>Come stop by our gear room and chat with gear room managers or other club leaders! We’re here to answer any 
                        questions you might have about what gear and services we provide, how to use it, and what we do! These are our 
                        hours for the semester; however, hours can be in flux week-by-week. Make sure to check our This Week Outside email 
                        each week for exact updates!
                    </p>
                    <h2>How doI rent gear?</h2>
                    <p>BOC gear is available for personal use by any Brown community member.  To check out gear, follow these steps:</p>
                    <p>1. Come by our office in the basement of Faunce (directions below) during gear room hours 
                        (should be on the right of the website header).</p>
                    <p>2. Find the gear that you want to check out (see partial list below).</p>
                    <p>3. Fill out a contact sheet with your name, information, and the days that you plan to use the gear.</p>
                    <p>4. Please bring cash in the amount of the gear rental fees below. All gear rentals are, by default, one week
                        pending availability. We do not accept credit card or Venmo. We will only collect the retail value of the 
                        gear if it is returned late, dirty, damaged, lost, or stolen.</p>
                    <p>5. By renting gear from the Brown Outing Club, you agree to all of our Gear Room Policies.</p>
                    <p>6. Have a fun trip!</p>
                    <h2>Fall 2023 Fees</h2>
                    <h2>Directions to the BOC Gear Room</h2>
                    <p>
                    Click on the tab “Where is the Gear Room?” for video directions!
                    Go into Faunce House and head down to the bottom floor.  Turn so 
                    that you’re walking east (toward Thayer St.), and walk through the 
                    orange hallway to the Kasper Multipurpose Room (a big room at the 
                    end of that hallway).  Keep walking across the multipurpose room and 
                    into a small hallway in the back right corner of the room. The BOC 
                    office is on your right.
                    </p>
                    <h2>More Questions?</h2>
                    <p>
                    If you have any more questions regarding gear rental or our inventory, please email us at 
                    outing@brown.edu or contact our gear room managers Cate & Ayo at ifadayo_engel-halfkenny@brown.edu 
                    and catherine_latimer@brown.edu
                    </p>

                </main>
                <Schedule />

            </div>
        </div>

    </div>);
}

