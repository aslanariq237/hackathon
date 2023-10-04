import React from 'react';
import axios from "axios";
import DataTable from "react-data-table-component";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { urlGetReq, urlResume } from '../../../url';
import Swal from 'sweetalert2';
// import pdfUtil from "pdf-to-text"


export default function Index() {
    const [resume, setResume] = React.useState([])
    const [req, setReq] = React.useState([])
    const [rowSelect, setRowSelect] = React.useState([])

    const GetResume = async () => {
        await axios.get(urlResume).then(res => {
            console.log(res)
            setResume(res.data)
        }).catch(err => console.log(err))
    }
    const GetReq = async() => {
        await axios.get(urlGetReq).then(res => {
            setReq(res.data)
        }).catch(err => console.log(err))
    }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const elements = e.target.elements;
    //     const requestData = {
    //         text_1 : "I want Graduate S1",
    //         text_2 : elements.text2.value,
    //     };  
    //     const requestJson = JSON.stringify(requestData);
    //     try {
    //         const response = await fetch("https://api.api-ninjas.com/v1/textsimilarity", {
    //             headers : {'X-Api-Key': '+4vtOoE3EzsQTjh1RR/yZw==P4AYiHr2gUZn5euh'},
    //             method: "POST",
    //             body: requestJson,
    //         });
    //         const responseText = await response.text();
    //         console.log(responseText);
    //     } catch (ex) {
    //         console.error("POST error!");
    //     }
    // };

    const columns = [
        {
            name: 'Nama',
            selector: row => row['nama'],
            sortable: true,
            maxWidth : "150px"
        },
        {
            name: 'Skill',
            selector: row => row['skill'],
            sortable: true,
            maxWidth : "350px",
        },
        {
            name: 'Graduate',
            selector: row => row['graduate'],
            sortable: true,
            maxWidth: "500px",
        },
        {
            name: 'Experience',
            selector: row => row['experience'],
            sortable: true,
            maxWidth : "250px"
        },
        {
            name: 'Status',
            selector: row => row.status === 0 ? 'Rejected' : 'Accepted',
            sortable: true,
            maxWidth: "150px"

        },
        {
            name: 'Action',
            selector: row => (
                <div>
                    <button>
                        <PencilIcon className="w-4 h-4 mr-3" />
                    </button>
                    <button>
                        <TrashIcon className="w-4 h-4" />
                    </button>
                </div>),
            sortable: true,
            maxWidth : "150px"

        }
    ]
    React.useEffect(() => {
        GetResume();
        GetReq();
        console.log('ssas')
    }, [rowSelect])

    // const contentStyle = { width: '500px', position: 'absolute', left: '500px', };
    return (
        <React.Fragment>
            <div className="px-10">
                <div className="head">
                    <div className="title flex justify-between items-baseline py-10">
                        <p>Hello, Admin</p>
                    </div>
                </div>
                <div className="table w-full">
                    <div className="card border-2 border-black rounded-lg">
                        <div className="card-header1 px-2 py-3">
                            <p className="text-xl font-semibold">
                                Resume Info
                            </p>
                        </div>
                        <div className="flex justify-end border-t-2 border-black px-2 py-3">
                            <div className=""></div>
                            <div className="search border-2 border-gray-300 rounded-full">
                                <input type="text" placeholder="Search" className="px-2 py-{2px} border-2 border-gray-300 rounded-full" />
                            </div>
                        </div>
                        <div className="card-body px-2 py-2 border-t-2 border-black">
                            <div>
                                <DataTable
                                    columns={columns}
                                    data={resume}
                                    keyField=''
                                    pagination
                                    persistTableHead
                                    dense
                                />
                            </div>
                        </div>
                        { }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}