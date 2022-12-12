export default function About() {
    return (
        <div className="flex flex-col p-6 gap-4 justify-between bg-white rounded-t-3xl">
            <h2 className="font-bold text-2xl">About Picowind</h2>
            {/* ABOUT MESSAGE */}
            <div className="justify-center w-full">
                <span className="font-bold">Picowind</span> is focused on the development of technologies that helps the country reduce electricity consumption by up to 10%. To date, Picowind has covered more than 5 Million+ peoples homes, farms, oil refineries and helped provide additional electricity to those in need.
            </div>
            {/* SEPARATOR LINE */}
            <div className="w-full bg-black h-px"></div>
            {/* STATS */}
            <div className="flex flex-wrap">
                <div className="w-1/2 flex flex-col text-center pb-4">
                    <h3 className="font-semibold text-lg">900</h3>
                    <div>Years Experience</div>
                </div>
                <div className="w-1/2 flex flex-col text-center pb-4">
                    <h3 className="font-semibold text-lg">900</h3>
                    <div>Years Experience</div>
                </div>
                <div className="w-1/2 flex flex-col text-center pb-4">
                    <h3 className="font-semibold text-lg">900</h3>
                    <div>Years Experience</div>
                </div>
                <div className="w-1/2 flex flex-col text-center pb-4">
                    <h3 className="font-semibold text-lg">900</h3>
                    <div>Years Experience</div>
                </div>
            </div>
        </div>
    )
}