export default function Header() {
    return (
        <div className="h-14 w-100vw flex mx-6">
            <div className="w-1/2 flex md:w-1/3 ">
                <a className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f2653e" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                    </svg>
                    <div className="text-xl font-bold">Picowind</div>
                </a>
            </div>
            <div className="hidden">2</div>
            <div className="hidden">3</div>
            <div className="w-1/2 flex items-center justify-end md:hidden">
                <a className="font-bold text-lg flex items-center" href="mailto:ethangalva@gmail.com">
                    <div className="text-md font-bold pr-1 hover:underline hover:transition-all">Email Us</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f2653e" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}
