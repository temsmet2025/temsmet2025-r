import { useState, useEffect } from 'react';


function PreNav() {
    function useIsDesktop() {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            function handleResize() {
                setWindowWidth(window.innerWidth);
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowWidth;
    }

    const windowWidth = useIsDesktop();
    const isDesktop = windowWidth > 1024;
    const isTablet = windowWidth >= 768 && windowWidth <= 1024;

    return (
        <section id="pre-nav" className="h-fit w-full flex justify-between items-center p-4">
            <div id="nit-logo" className="aspect-square flex justify-center" style={{ width: isDesktop ? '8rem' : isTablet ? '6rem' : '4rem' }}>
                <img src="./logos/nit-logo/NIT-Delhi_Logo.png" className="aspect-square" style={{ width: isDesktop ? '8rem' : isTablet ? '6rem' : '4rem' }} alt="NIT-DELHI-LOGO" />
            </div>
            <div id="tems-logos" className="flex justify-center p-5 sm:p-0 lg:flex-row xl:w-full" style={{ width: isDesktop ? '30rem' : isTablet ? '24rem' : '10rem' }}>
                <div id="tems-management" className='flex justify-center'>
                    {isDesktop && <img src="./logos/IEEE TEMS logo/17-TA-213 TEMS logo RGB_bg_removed.png" className="w-full h-16 pl-10" alt="TEMS-LOGO" />}
                    {isTablet && !isDesktop && <img src="./logos/IEEE TEMS logo/17-TA-213 TEMS logo mobile.jpeg" className="w-full" alt="TEMS-LOGO" />}
                    {!isDesktop && !isTablet && <img src="./logos/IEEE TEMS logo/17-TA-213 TEMS logo mobile.jpeg" className="w-full" alt="TEMS-LOGO" />}
                </div>
            </div>
            <div id="temsmet" className='flex justify-center'>
                <img src="./logos/IEEE TEMS logo/Temsmet 2025.png" className="w-36 lg:w-80 md:mr-14" alt="TEMS-LOGO" />
            </div>
            <div id="ieee-logo" className="flex justify-center" style={{ width: isDesktop ? '15rem' : isTablet ? '10rem' : '6rem' }}>
                <img src="./logos/IEEE-logo/IEEE_logo.svg" alt="IEEE-LOGO" className="w-full" />
            </div>

        </section>
    )
}
export default PreNav; 