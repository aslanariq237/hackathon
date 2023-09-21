import React from "react";
import Carousel from './carousel'
import Navbar from "../template/navbar";

function Home() {
    return(
        <div className="pt-3">
            <div className="w-full">
                <Navbar/>
            </div>
            <div className="carousel mx-4">
                <Carousel/>
            </div>
        </div>
    )
}

export default Home