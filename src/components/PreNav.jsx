
function PreNav() {
    return (
        <section id="pre-nav" className="h-52 w-full flex justify-between items-center p-10">
            <div id="nit-logo" className="h-[10rem] w-[10rem]">
                <img src="./logos/nit-logo/NIT-Delhi_Logo.png" className="h-[10rem] w-[10rem]" alt="NIT-DELHI-LOGO" />
            </div>
            <div id="tems-logos" className="h-[8rem] w-[25rem]">
                <div id="tems-management">
                    <img src="./logos/IEEE TEMS logo/17-TA-213 TEMS logo RGB_bg_removed.png" className="h-[8rem] w-[25rem]" alt="TEMS-LOGO" />
                </div>
            </div>
            <div id="ieee-logo" className="h-[8rem] w-[20rem]">
                <img src="./logos/IEEE-logo/IEEE_logo.png" alt="IEEE-LOGO" className="h-[8rem] w-[20rem]"/>
            </div>
        </section>
    )
}
export default PreNav;