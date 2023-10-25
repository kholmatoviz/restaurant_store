import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Catagory() {

    const { state } = useLocation()
    const [isEdit, setIsEdit] = useState({ type: false, id: null });
    const [dataSecond, setDataSecond] = useState([])
    const navigate = useNavigate()
    const url = "http://localhost:8080/catagory"
    const url2 = "http://localhost:8080/foods"

    useEffect(() => {
        axios
            .get(url2)
            .then((res) => setDataSecond(res.data))
            .catch((err) => console.log(err))
    }, [])


    const formik = useFormik({
        initialValues: {
            title: "",
            img: "",
        },
        onSubmit: (values) => {
            if (isEdit.type) {
                const payload = {
                    title: values.title,
                    img: values.img,
                }
                axios
                    .put(`${url}/${isEdit.id}`, payload)
                    .then()
                    .catch((err) => console.log(err));
            } else {
                const payload = {
                    id: new Date(),
                    title: values.title,
                    img: values.img,
                };

                axios
                    .post(url, payload)
                    .then()
                    .catch((err) => console.log(err));
            }
            navigate("/Admin");
            formik.resetForm();
        },
    });

    useEffect(() => {
        if (state) {
            setIsEdit({ type: true, id: state.id });
            formik.setValues({
                title: state.title,
                img: state.img
            });
        }
    }, []);

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='py-3 px-5 bg-gray-400 rounded-md mx-5 mt-5'>
                <h1 className="text-center text-white text-2xl font-semibold font-serif mb-6">
                    {isEdit.type ? "Edit" : "Create"}
                </h1>

                <div>
                    <form className="grid grid-cols-2 gap-5" onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="" className='text-white'>Catagory:</label>
                            <input
                                id="title"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="title"
                                placeholder="Title"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>Image:</label>
                            <input
                                id="img"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="img"
                                placeholder="Images"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.img}
                            />
                        </div>

                        <div className='flex gap-5'>
                            <button
                                className="w-full h-[40px] text-center bg-green-500 text-white font-semibold text-xl rounded-md hover:bg-green-600"
                                type="submit"
                            >
                                {isEdit.type ? "Edit" : "Create"}
                            </button>

                            <button
                                className="w-full h-10 mt-7 text-center bg-red-500 text-white font-semibold text-xl rounded-md hover:bg-green-600"
                                onClick={() => navigate("/Product")}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Catagory