import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/AdminNavbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Admin() {

    const url = "http://localhost:8080/catagory"
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [dataSecond, setDataSecond] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))

        axios
            .get("http://localhost:8080/foods")
            .then((res) => setDataSecond(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleDelete = (item) => {
        dataSecond.filter((elem) => {
            if (item.title === elem.catagoryName) {
                axios
                    .delete(`${"http://localhost:8080/foods"}/${elem.id}`)
                    .then()
                    .catch((err) => console.log(err));

                axios
                    .delete(`${url}/${item.id}`)
                    .then()
                    .catch((err) => console.log(err));
            } else {
                axios
                    .delete(`${url}/${item.id}`)
                    .then()
                    .catch((err) => console.log(err));
            }
        })

        setOpen(false)
        window.location.reload(false)
    }

    const handleUpdate = (item) => {
        navigate("/Catagory", { state: item })
    }


    return (
        <div>
            <AdminNavbar />

            <div className="px-2 py-5">
                <div className="flex justify-end py-3 px-3">
                    <button onClick={() => navigate("/Catagory")} className="text-xl rounded-md text-white px-5 py-2 bg-green-500">
                        <BiMessageSquareAdd />
                    </button>
                </div>

                <div>
                    <div className="grid md:grid-cols-2 px-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {
                            data.map((item) => (
                                <div key={item.id}>
                                    <div className={`${open ? 'top-0 left-0 h-[100vh] w-[100%]  absolute  z-50 flex justify-center items-center' : 'hidden'}`}>
                                        <div>
                                            <div className="w-[300px] h-[150px] bg-white rounded-lg shadow-lg text-center flex justify-center items-center">
                                                <div>
                                                    <p className="-mt-2 text-[30px]">Are You Sure?</p>

                                                    <div className="flex gap-5 mt-5 ml-5">
                                                        <button onClick={() => { handleDelete(item) }} className="text-white py-[8px] px-[30px] bg-[#234ce3] rounded-lg font-semibold text-2xl">Ok</button>
                                                        <button onClick={() => setOpen(false)} className="text-[#234ce3] font-semibold text-2xl">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-5 mt-5 py-3 shadow-2xl rounded-md border">
                                        <div
                                            style={{
                                                backgroundImage: `url(${item.img})`,
                                                width: "100%",
                                                height: "200px",
                                                borderRadius: "6px",
                                                backgroundPosition: "center",
                                                backgroundSize: "cover"
                                            }}>
                                        </div>

                                        <div className="flex justify-between">
                                            <div className="mt-3 font-medium text-base">
                                                {item.title}
                                            </div>

                                            <div className="mt-3 flex gap-3">
                                                <button onClick={() => handleUpdate(item)} className="p-2 rounded-2xl bg-amber-600 text-white"><AiFillEdit /></button>
                                                <button onClick={() => setOpen(true)} className="p-2 rounded-2xl bg-red-600 text-white"><AiFillDelete /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin