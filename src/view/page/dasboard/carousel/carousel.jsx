import React, { useState, useEffect } from "react";
import Resume from '../../../image/resume1.png'
import AttachFileIcon from '@mui/icons-material/AttachFile';


// import openai from "openai";

// openai.api_key = "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"

// const API_KEY ="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"
   

const Carousel = () => {
    return (
        <div className="flex justify-center">
            <div className="card border shadow-xl w-full mt-10 h-full">
                <div className="w-full bg-blue-100 py-5">
                    <h1 className="text-xl font-semibold ml-5">RESUME PARSER</h1>
                </div>
                <div className="flex justify-between example mb-10 mt-4 mx-40">
                    <img src={Resume} alt="" className="w-72" />
                    <img src={Resume} alt="" className="w-72" />
                </div>
                <div className="anon mx-5">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quisquam totam. Voluptatum inventore ab aperiam animi quam quaerat sit consequuntur, sint a ratione? Optio animi quo velit sint, non voluptatem?
                        Error quo omnis perferendis inventore quibusdam? Odio voluptatem magnam error explicabo quae suscipit, fugit sapiente repellendus assumenda, facere voluptatum hic consequuntur illum labore corrupti, fugiat esse temporibus aspernatur quidem aliquid?</p>
                </div>
                <div className="border border-b-gray-400 mt-8 mx-10"></div>
                <div className="flex justify-evenly mt-5 mx-9 mb-5">
                    <div className="card bg-white py-4 w-full">
                        <div className="card-body">
                            <div className="input">
                                <div className="flex space-x-1">
                                    <span><AttachFileIcon sx={{ fontSize: 20 }} /></span>
                                    <p className="mb-2">File</p>
                                </div>
                                <input type="file" name="file" id="file" className="inputFile" />
                                <p className="text-sm text-gray-400 mt-2">Input File</p>
                            </div>
                            <div className="login">
                                <p className=" mt-3">Sign In To Run This Model :</p>
                                <button className="border shadow-lg rounded px-3 py-2 bg-blue-200 mt-3">Sign In</button>
                            </div>
                        </div>
                    </div>
                    <div className="card border w-full">
                        <div className="card-body">
                            <div className="result">
                                <p className="text-gray-400 py-5 px-5">Foto Upload</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Carousel