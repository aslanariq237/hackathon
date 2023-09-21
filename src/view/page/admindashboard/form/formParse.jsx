import React, { useEffect, useState } from "react";
import { urlGetReq, urlStoreReq } from "../../../../url";
import axios from "axios";

const FormParse = () => {
    const [data, setData] = useState();
    const [require, setRequire] = useState();

    const getResume = async() => {
        await axios.get(urlGetReq).then(function(response){
            setData(response.data)
        })
    }

    const resume = (e) =>{
        [e.target.name] : e.target.value
    }
    useEffect(() => {
        axios.post(urlStoreReq,
            JSON.stringify(resume)
            ).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err.data)
            })
        getResume();
        console.log('ssas');
    }, [])
    return (
        <div className=" mx-4 mt-20">
            <div className="flex justify-center">
                <div className="container">
                    <div className="card shadow-md px-5 py-5 border-t-4">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta assumenda debitis odio unde labore vel blanditiis, officiis rerum architecto eum corrupti nostrum. Facilis incidunt, officia quo repellendus quidem optio?</p>
                            <form>
                                <div className="skill mt-2">
                                    <p>SKILL*</p>
                                    <input type="text" className="border px-2 rounded-md w-full" name="skill" />
                                </div>
                                <div className="graduate mt-3">
                                    <p>GRADUATE</p>
                                    <input type="text" className="border px-2 rounded-md w-full" name="graduate" />
                                </div>
                                <div className="experience mt-2">
                                    <p>EXPERIENCE</p>
                                    <input type="text" className="border px-2 rounded-md w-full" name="experience" />
                                </div>
                                <input type="submit" value="Submit" className="border shadow-md rounded-md px-2 w-28 mt-3" />
                            </form>
                        </div>
                    </div>
                    <div className="card mt-4 shadow-md border-t-4">
                        <div className="card-body">
                            {data?.map((li, i) => (
                                <div className="" key={i}>
                                    <p>{li.skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormParse