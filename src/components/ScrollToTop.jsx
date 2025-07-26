import React, { useEffect } from 'react'

const ScrollToTop = (props) => {

    useEffect(() => {
        const timeOUt = setTimeout(() => {
            const element = document.getElementById(props.elementId);
            if (element) {
                const rect = element?.getBoundingClientRect();
                const scrollOffset = window.scrollY + rect.y - 260;
                window.scroll({
                    top: scrollOffset,
                    behavior: "smooth",
                });
            }

        }, 0)
        return () => clearTimeout(timeOUt);
    }, [props.elementId])

    return null
}

export default ScrollToTop