export default function Footer() {
    return (
        <div className="min-h-min max-h-fit w-100vw p-6 flex flex-col bg-white rounded-t-3xl justify-between gap-12">
            {/* SECTION 1 */}
            <div className="flex flex-col gap-8">
                {/* CONTACT INFO */}
                <div className="flex flex-col gap-4">
                    {/* brand */}
                    <div className="flex w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#f2653e" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                        </svg>
                        <div className="text-3xl font-bold">Picowind</div>
                    </div>
                    {/* info about company */}
                    <div>
                        3333 Loremview Dr. Ipsumson,<br></br>
                        California 33333, United States
                    </div>
                    {/* email */}
                    <a href="mailto:ethangalva@gmail.com" className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f2653e" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                        <div className="font-semibold hover:underline">ethangalva@gmail.com</div>
                    </a>
                </div>
                {/* LINKS BACK TO ID'S */}
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl">Find your way</h1>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <a href="#" className="font-medium text-lg hover:underline">Home</a>
                        <a href="#" className="font-medium text-lg hover:underline">Project</a>
                        <a href="#" className="font-medium text-lg hover:underline">About Us</a>
                        <a href="#" className="font-medium text-lg hover:underline">Article</a>
                    </div>
                </div>
                {/* PROJECT LINKS */}
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl">Project Links</h1>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <a href="https://github.com/ethangalva" target="_blank" rel="noreferrer" className="font-medium text-lg hover:underline">Github</a>
                        <a href="#" className="font-medium text-lg hover:underline">Linked In</a>
                        <a href="#" className="font-medium text-lg hover:underline">Read Me</a>
                        <a href="#" className="font-medium text-lg hover:underline">Portofolio</a>
                        <a href="https://dribbble.com/shots/19808444-Dutchwind-Mobile-rensponsive-energy-Sunnyday" target="_blank" rel="noreferrer"  className="font-medium text-lg hover:underline">Inspiration</a>
                        <a href="https://dribbble.com/sunnydayatteamup" target="_blank" rel="noreferrer"  className="font-medium text-lg hover:underline">Credits</a>

                    </div>
                </div>
            </div>
            {/* SECTION 2 */}
            <div>
                {/* RIGHTs */}
                <div className="relative bottom-0 inset-x-0 flex justify-start">
                    <a href="https://github.com/ethangalva" target="_blank" rel="noreferrer" className="font-bold hover:underline" >by @ethangalva</a>
                </div>
            </div>
        </div>
    )
}
