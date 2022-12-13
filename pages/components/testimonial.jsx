export default function Testimonial() {
    return (
        <div className="bg-[#e2dbd0]" id="testimonials">
            <div className="flex flex-col p-6 gap-4 justify-between bg-[#ecede8] rounded-t-3xl">
                {/* TITLE */}
                <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl">Testimonials<br /> From Partners</h2>
                {/* TESTIMONIALS */}
                <div className="overflow-hidden flex flex-col gap-8 md:flex-row">
                    <div className="w-full flex flex-col gap-2 border border-neutral-400 rounded-xl p-4 hover:bg-neutral-300 justify-between">
                        <p className="text-lg font-medium">&quot;Ut diam quam nulla porttitor massa id. Pretium quam vulputate dignissim suspendisse in.&quot;</p>
                        <div className="flex flex-row gap-2 pl-2">
                            <div className="h-12 w-12 bg-[url(https://placekitten.com/128/128)] saturate-0 bg-center bg-no-repeat bg-cover rounded-full" />
                            <p className="font-medium text-md flex items-center">Catppuccin Enjoyer</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 border border-neutral-400 rounded-xl p-4 hover:bg-neutral-300 justify-between">
                        <p className="text-lg font-medium">&quot;Rhoncus mattis rhoncus urna neque viverra. Gravida arcu ac tortor dignissim.&quot;</p>
                        <div className="flex flex-row gap-2 pl-2">
                            <div className="h-12 w-12 bg-[url(https://placekitten.com/127/127)] saturate-0 bg-center bg-no-repeat bg-cover rounded-full" />
                            <p className="font-medium text-md flex items-center">Gruvbox Enjoyer</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 border border-neutral-400 rounded-xl p-4 hover:bg-neutral-300 justify-between">
                        <p className="text-lg font-medium">&quot;Enim nec dui nunc mattis enim. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.&quot;</p>
                        <div className="flex flex-row gap-2 pl-2">
                            <div className="h-12 w-12 bg-[url(https://placekitten.com/126/126)] saturate-0 bg-center bg-no-repeat bg-cover rounded-full" />
                            <p className="font-medium text-md flex items-center">Solarized Enjoyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}