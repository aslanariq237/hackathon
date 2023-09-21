import React from 'react';
import axios from "axios";
import DataTable from "react-data-table-component";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { urlResume } from '../../../url';
import Swal from 'sweetalert2';
// import pdfUtil from "pdf-to-text"


export default function Index() {
    const [getResume, setGetResume] = React.useState([])
    const [rowSelect, setRowSelect] = React.useState([])


    // const ResumePDF = () => {
    //     var pdf_path = "../../pdf/CO FADLIN SAHABU.pdf";

    //     //option to extract text from page 0 to 10
    //     var option = { from: 0, to: 10 };

    //     pdfUtil.pdfToText(pdf_path, option, function (err, data) {
    //         if (err) throw (err);
    //         console.log(data); //print text    
    //     });

    //     //Omit option to extract all text from the pdf file
    //     pdfUtil.pdfToText(pdf_path, function (err, data) {
    //         if (err) throw (err);
    //         console.log(data); //print all text    
    //     });
    // }


    const GetResume = async () => {
        await axios.get(urlResume).then(res => {
            setGetResume(res.data)
        }).catch(err => console.log)
    }

    // const DelEvent = async (e, rowSelect) => {
    //     await axios.post(urlDelEvent, {
    //         id: rowSelect.id
    //     }).then(function () {
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Sukses Delete Event',
    //             showConfirmButton: false,
    //             timer: 1500
    //         })
    //             .then(
    //                 getEvent()
    //             )
    //     })
    //         .catch((message) => {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: message.response.data.message,
    //                 showConfirmButton: false,
    //                 timer: 160000
    //             })
    //         })
    // }

    const columns = [
        {
            name: 'Nama',
            selector: row => row['nama'],
            sortable: true
        },
        {
            name: 'Skill',
            selector: row => row['skill'],
            sortable: true
        },
        {
            name: 'Graduate',
            selector: row => row['graduate'],
            sortable: true
        },
        {
            name: 'Experience',
            selector: row => row['experience'],
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status === 0 ? 'Rejected' : 'Accepted',
            sortable: true

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
            sortable: true

        }
    ]
    React.useEffect(() => {
        GetResume();
        console.log('ssas')
    }, [rowSelect])

    const contentStyle = { width: '700px', position: 'absolute', left: '500px', };
    return (
        <React.Fragment>
            <div className="px-10">
                <div className="head">
                    <div className="title flex justify-between items-baseline py-10">
                        <p>Hello, Admin</p>
                        {/* <Popup trigger={<button className="text-md bg-slate-200 py-1 px-1 rounded-md">Create New Event</button>} position="left top"
                            {...{contentStyle}}
                        >
                            <div className="container bg-gray-200">
                                <div className="card">
                                    <div className="card-header border px-2 py-2">
                                        <p className="text-lg font-semibold">Create Event</p>
                                    </div>
                                    <div className="card-body border shadow-md px-4 py-4">
                                        <div className="Title">
                                            <p className="title text-md ml-2">Event Title</p>
                                            <input className="border px-2 w-full rounded-md" type="text" name="" placeholder="Input Title Event" id="" />
                                        </div>
                                        <div className="flex date-time space-x-5">
                                            <div className="time">
                                                <p className="title text-md ml-2">Time</p>
                                                <input type="time" className="border px-2 w-full rounded-md" name="" id="" />
                                            </div>
                                            <div className="date">
                                                <p className="title text-md ml-2">Date</p>
                                                <input className="border px-2 w-full rounded-md" type="date" name="" placeholder="Input Title Event" id="" />
                                            </div>
                                        </div>
                                        <div className="Location">
                                            <p className="title text-md ml-2">Location</p>
                                            <input className="border px-2 w-full rounded-md" type="text" name="" placeholder="Input Location" id="" />
                                        </div>
                                        <div className="poster">
                                            <p className="title text-md ml-2">Poster</p>
                                            <div className="card">
                                                <div className="card-body border rounded-md bg-white">
                                                    <input type="file" name="" id="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit flex justify-center w-full shadow-lg mt-4 bg-white rounded-md text-lg">Submit</div>
                                    </div>
                                </div>
                            </div>
                        </Popup> */}
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
                                    data={getResume}
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