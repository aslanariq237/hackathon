import React, { useEffect, useState } from "react";
import {urlGetReq, urlStoreReq } from "../../../../url";
import axios from "axios";


const Resume = () => {
    const [Data, setData] = useState()
    const getData = async() => {
        await axios.get(urlGetReq).then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    const resume = async (e) => {
        e.preventDefault();
        const elements = e.target.elements

        await axios.post(urlStoreReq, {
            skill : elements.skill.value,
            graduate : elements.graduate.value,
            experience : elements.experience.value
        }).then(res => {
            console.log(res)
            res.json()
            console.log(res.json())
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getData();
    },[])

    return (
        <div className=" mx-4 mt-20">
            <div className="flex justify-center">
                <div className="container w-[1000px]">
                    <div className="card shadow-md px-5 py-5 border-t-4 ">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta assumenda debitis odio unde labore vel blanditiis, officiis rerum architecto eum corrupti nostrum. Facilis incidunt, officia quo repellendus quidem optio?</p>
                            <form onSubmit={resume}>
                                <div className="skill mt-2">
                                    <p>SKILL*</p>
                                    <input type="text" className="border px-2 rounded-md w-full" name="skill"/>
                                </div>
                                <div className="graduate mt-3">
                                    <p>GRADUATE</p>
                                    <input type="text" className="border px-2 rounded-md w-full" name="graduate"/>
                                </div>
                                <div className="experience mt-2">
                                    <p>EXPERIENCE</p>
                                    <input type="text" className="border px-2 rounded-md w-full" name="experience"/>
                                </div>
                                <button type="submit" className="border shadow-md rounded-md px-2 w-28 mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                    {/* <div className="card mt-4 shadow-md border-t-4">
                        <div className="card-body">
                            {Data?.map((li, i) => (
                                <div className="" key={i}>
                                    <ul className="fle">
                                        <li>{li.skill}</li>
                                        <li>{li.graduate}</li>
                                        <li>{li.experience}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Resume