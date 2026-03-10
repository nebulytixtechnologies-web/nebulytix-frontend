import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';

const RootLayout = () => {
    const { pathname } = useLocation();

    // Scroll to top immediately when route changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    return (
        <>
            <Outlet />
            <ScrollToTopButton />
        </>
    );
};

export default RootLayout;
