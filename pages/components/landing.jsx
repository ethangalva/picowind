export default function Landing() {
    return (
        <div className="h-screen flex flex-col px-8 pb-6 justify-between" id="home">
            {/* MESSAGE / CTA */}
            <div className="h-5/6 flex flex-col gap-4 justify-center">
                <h1 className="text-6xl font-semibold w-full md:text-8xl lg:w-3/5 xl:w-2/5">Smart Concept For Better Future</h1>
                <a href="mailto:ethangalva@gmail.com" className="contactUsNow w-3/4 md:w-1/2 lg:w-1/5">Contact Us Now →</a>
            </div>
            {/* QUOTE */}
            <div>
                <div className="w-full bg-black h-px md:w-1/2 lg:w-1/4"></div>
                <div className="font-bold text-xl">Picowind</div>
                <div className="font-light">Best Windpower Energy in This World</div>
            </div>
        </div>
    )
}