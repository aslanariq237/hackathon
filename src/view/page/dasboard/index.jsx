import React from "react";
import Carousel from './carousel'
import Navbar from "../template/navbar";

function Home() {
    return (
        <div className="pt-3">
            <div className="w-full fixed">
                <Navbar />
            </div>
            <div className="carousels">
                <div className="notif mt-16">
                    <div className="bg-blue-300 flex justify-center space-x-4 py-2">
                        <p className="font-semibold text-xl text-slate-800">Want to run this model wiht an API?</p>
                        <button className="border border-black px-2 h-8 rounded-lg">Get Started</button>
                    </div>
                </div>
                <div className="carousel mx-4">
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}

export default Home