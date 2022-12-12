export default function Service() {
    return (
        <div className="bg-white">
            <div className="flex flex-col p-6 gap-4 justify-between bg-[#ecede8] rounded-t-3xl">
                {/* TITLE */}
                <h2 className="font-bold text-2xl">Our Services</h2>
                {/* SERVICES BOXES */}
                <div className="justify-center w-full flex flex-col gap-4">
                    <div className="border border-neutral-400 rounded-xl p-4 flex flex-col gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f2653e" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                        </svg>
                        <h3 className="font-semibold text-xl">Energy<br />Consultant</h3>
                        <div className="w-4/5 text-lg">This is a short block of text explaining what this service is about and what it entails.</div>
                    </div>
                    <div className="border border-neutral-400 rounded-xl p-4 flex flex-col gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f2653e" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </svg>
                        <h3 className="font-semibold text-xl">Tower<br />Installation</h3>
                        <div className="w-4/5 text-lg">This is a short block of text explaining what this service is about and what it entails.</div>
                    </div>
                    <div className="border border-neutral-400 rounded-xl p-4 flex flex-col gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f2653e" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        </svg>
                        <h3 className="font-semibold text-xl">24/7<br />Maintenance</h3>
                        <div className="w-4/5 text-lg">This is a short block of text explaining what this service is about and what it entails.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}