import React from 'react'
import Hero from './sections/Hero'
import Hearder from './sections/Hearder'
import ColectionCard from './sections/ColectionCard'
import ServicesCard from './sections/ServicesCard'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const Home = () => {
    return (
        <>
            <Hearder />
            <Hero />
            <ColectionCard />
            <ServicesCard />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
