export default function Project() {
    return (
        <div className="bg-[#ecede8]" id="project">
            <div className="flex flex-col p-6 gap-4 justify-between bg-[#e2dbd0] rounded-t-3xl">
                {/* TITLE */}
                <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl">Our Project</h2>
                {/* SERVICES BOXES */}
                <div className="justify-center w-full flex flex-col gap-8 md:flex-row">
                    <div className="rounded-xl flex-col gap-2 flex">
                        <div className="bg-[url('../public/windturbine1.jpg')] bg-center bg-no-repeat bg-cover w-full h-72 sepia rounded-2xl hover:sepia-[.8]"></div>
                        <h3 className="font-semibold text-xl">Mexico Turbine<br />Modular Transportation</h3>
                        <div className="w-4/5 text-lg">This is a short block of text explaining what this service is about and what it entails.</div>
                    </div>
                    <div className="rounded-xl flex-col gap-2 flex">
                        <div className="bg-[url('../public/windturbine2.jpg')] bg-center bg-no-repeat bg-cover w-full h-72 sepia rounded-2xl hover:sepia-[.8]"></div>
                        <h3 className="font-semibold text-xl">Canada Turbine<br />Installation Supervision</h3>
                        <div className="w-4/5 text-lg">This is a short block of text explaining what this service is about and what it entails.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}





















