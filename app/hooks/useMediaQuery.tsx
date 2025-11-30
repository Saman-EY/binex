'use client'
import { useEffect, useState } from "react";

function useMediaQuery(query:string) {

    const [matches, setMatches] = useState(false);

    useEffect(() => {
        setMatches(window.matchMedia(query).matches);

        const handleResize = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        const mediaQuery = window.matchMedia(query);

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    return {
        matches
    }
};

export default useMediaQuery;