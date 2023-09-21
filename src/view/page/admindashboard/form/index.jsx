import React from "react";
import Navbar from "../../template/navbar";
import FormParse from "./formParse";

function Index() {
    return (
        <div className="">
            <div className="w-full">
                <Navbar />
            </div>
            <div className="mt-5">
                <FormParse />
            </div>
        </div>
    )
}

export default Index