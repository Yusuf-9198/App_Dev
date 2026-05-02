import React from 'react'
import Header from './componenet/Header/Header'
import Footer from './componenet/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />

            <Footer />
        </>
    )
}

export default Layout