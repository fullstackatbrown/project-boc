import NavBar from "../../components/NavBar";

export default function LandAcknowledgement() {
    return (
        <div className="h-full min-h-screen w-full">
            <div>
                <NavBar></NavBar>
            </div>
            {/* Dynamic spacer based on header height */}
            <div style={{ minHeight: `5px` }}></div>

            <div id="content" className="text-center p-5">
                <div>
                    <h1 className="mx-60 mb-8 text-black text-6xl font-bold mb-12 text-left leading-10">
                    Land Acknowledgement
                    </h1>
                </div>
                <div id="paragraph" className="mx-60 mb-8 text-xl font-[100] text-left leading-10 italic">
                “Brown University is located in Providence, Rhode Island, on lands that are within the ancestral 
                homelands of the Narragansett Indian Tribe. We acknowledge that beginning with colonization and 
                continuing for centuries the Narragansett Indian Tribe have been dispossessed of most of their 
                ancestral lands in Rhode Island by the actions of individuals and institutions. We acknowledge our 
                responsibility to understand and respond to those actions. The Narragansett Indian Tribe, whose ancestors 
                stewarded these lands with great care, continues as a sovereign nation today. We commit to working together 
                to honor our past and build our future with the truth.” 


                </div>
            </div>

        </div>
    )
}