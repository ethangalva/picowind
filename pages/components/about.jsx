export default function About() {
    return (
        <div className="flex flex-col p-6 gap-4 bg-white rounded-t-3xl w-full md:gap-0 md:flex-wrap md:flex-row" id="aboutus">
            <h2 className="font-bold text-2xl md:w-1/2 md:text-6xl lg:text-8xl">About Picowind</h2>
            {/* ABOUT MESSAGE */}
            <div className="justify-center w-full text-lg md:w-1/2 md:gap-2 md:flex md:flex-col">
                <div><span className="font-bold text-lg">Picowind</span> is focused on the development of technologies that helps the country reduce electricity consumption by up to 10%. To date, Picowind has covered more than 5 Million+ peoples homes, farms, oil refineries and helped provide additional electricity to those in need.</div>
                <div className="hidden md:flex">Picowind is focused on the development of technologies that helps the country reduce electricity consumption by up to 10%. To date, Picowind has covered more than 5 Million+ peoples homes, farms, oil refineries and helped provide additional electricity to those in need.</div>
            </div>
            {/* SEPARATOR LINE */}
            <div className="w-full bg-black h-px md:hidden"></div>
            {/* STATS */}
            <div className="flex flex-wrap w-full md:flex-nowrap md:mt-8">
                <div className="w-1/2 flex flex-col text-center pb-4 ">
                    <h3 className="font-bold text-xl lg:text-3xl">900</h3>
                    <div className="text-lg lg:text-2xl">Years Experience</div>
                </div>
                <div className="w-1/2 flex flex-col text-center pb-4">
                    <h3 className="font-bold text-xl lg:text-3xl">900</h3>
                    <div className="text-lg lg:text-2xl">Years Experience</div>
                </div>
                <div className="w-1/2 flex flex-col text-center pb-4">
                    <h3 className="font-bold text-xl lg:text-3xl">900</h3>
                    <div className="text-lg lg:text-2xl">Years Experience</div>
                </div>
                <div className="w-1/2 flex flex-col text-center pb-4">
                    <h3 className="font-bold text-xl lg:text-3xl">900</h3>
                    <div className="text-lg lg:text-2xl">Years Experience</div>
                </div>
            </div>
        </div>
    )
}