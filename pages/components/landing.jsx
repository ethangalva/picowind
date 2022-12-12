export default function Landing() {
    return (
        <div className="h-screen flex flex-col px-8 pb-6 justify-between">
            {/* MESSAGE / CTA */}
            <div className="h-5/6 flex flex-col gap-4 justify-center">
                <h1 className="text-6xl font-semibold w-full">Smart Concept For Better Future</h1>
                <button className="w-3/4">Contact Us Now →</button>
            </div>
            {/* QUOTE */}
            <div>
                <div className="w-full bg-black h-px"></div>
                <div className="font-bold text-xl">Picowind</div>
                <div className="font-light">Best Windpower Energy in This World</div>
            </div>
        </div>
    )
}