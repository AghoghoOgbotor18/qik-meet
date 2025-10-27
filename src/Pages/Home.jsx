import React from "react"
import { useState } from "react"
import NavBar from "../Components/NavBar"
import Hero from "../Components/Hero"
import About from "../Components/About"
import Brands from "../Components/Brands"
import Testimonials from "../Components/Testimonials"
import FAQ from "../Components/Faq"
import Footer from "../Components/Footer"


const Home = () => {
   

    return(
        <div>
            <NavBar />
            <Hero />
            <About />
            <Brands />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    )
}
export default Home