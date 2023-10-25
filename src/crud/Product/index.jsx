import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';

function Products() {

    const url = "http://localhost:8080/foods"
    const url2 = "http://localhost:8080/catagory"
    const { state } = useLocation()
    const [isEdit, setIsEdit] = useState({ type: false, id: null });
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(url2)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])


    const formik = useFormik({
        initialValues: {
            name: "",
            price: 0,
            img: "",
            desc: "",
            img1: "",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            img6: "",
            catagoryName: {},
        },
        onSubmit: (values) => {
            if (isEdit.type) {
                const imagess = []

                function addImage(item) {
                    if (item !== "" && item !== undefined) {
                        imagess.push(item)
                    }
                }

                addImage(values.img1)
                addImage(values.img2)
                addImage(values.img3)
                addImage(values.img4)
                addImage(values.img5)
                addImage(values.img6)

                const payload = {
                    name: values.name,
                    price: values.price,
                    img: values.img,
                    desc: values.desc,
                    images: imagess,
                    catagoryName: values.catagoryName,
                };

                axios
                    .put(`${url}/${isEdit.id}`, payload)
                    .then()
                    .catch((err) => console.log(err));
            } else {
                const imagess = []

                function addImage(item) {
                    if (item !== "" && item !== undefined) {
                        imagess.push(item)
                    }
                }

                addImage(values.img1)
                addImage(values.img2)
                addImage(values.img3)
                addImage(values.img4)
                addImage(values.img5)
                addImage(values.img6)

                const payload = {
                    id: new Date(),
                    name: values.name,
                    price: values.price,
                    img: values.img,
                    desc: values.desc,
                    images: imagess,
                    catagoryName: values.catagoryName,
                };

                axios
                    .post(url, payload)
                    .then()
                    .catch((err) => console.log(err))
            }
            navigate("/product");
            formik.resetForm();
        },
    });

    useEffect(() => {
        if (state) {
            setIsEdit({ type: true, id: state.id });
            formik.setValues({
                name: state.name,
                price: state.price,
                img: state.img,
                desc: state.desc,
                img1: state.images[0],
                img2: state.images[1],
                img3: state.images[2],
                img4: state.images[3],
                img5: state.images[4],
                img6: state.images[5],
                catagoryName: state.catagoryName,
            });
        }
    }, []);

    return (
        <div className='flex justify-center mt-44 items-center h-screen'>
            <div className='py-3 px-10 bg-gray-400 rounded-md mt-96'>
                <h1 className="text-center text-white text-2xl font-semibold font-serif mb-6">
                    {isEdit.type ? "Edit" : "Create"}
                </h1>

                <div>
                    <form className="grid grid-cols-1 gap-5" onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="" className='text-white'>Name:</label>
                            <input
                                id="name"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-[300px]"
                                name="name"
                                placeholder="Name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>Image:</label>
                            <input
                                id="img"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="img"
                                placeholder="Image"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.img}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>price:</label>
                            <input
                                id="price"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="price"
                                placeholder="Price"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>desc:</label>
                            <input
                                id="desc"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="desc"
                                placeholder="desc"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.desc}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>Photo:</label>
                            <input
                                id="img1"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="img1"
                                placeholder="Photo"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.img1}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>Photo:</label>
                            <input
                                id="img2"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="img2"
                                placeholder="Photo"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.img2}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>Photo:</label>
                            <input
                                id="img3"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="img3"
                                placeholder="Photo"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.img3}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>Photo:</label>
                            <input
                                id="img4"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="img4"
                                placeholder="Photo"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.img4}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>Photo:</label>
                            <input
                                id="img5"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="img5"
                                placeholder="Photo"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.img5}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white'>Photo:</label>
                            <input
                                id="img6"
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="img6"
                                placeholder="Photo"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.img6}
                            />
                        </div>

                        <div>
                            <label htmlFor="" className='text-white'>Catagory:</label>
                            <select
                                className="block rounded-md mb-5 pl-4 outline-none mt-1 border-2 h-10 border-gray-400 w-full"
                                name="catagoryName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.catagoryName}
                            >
                                <option selected>Chouse Catagory</option>
                                {
                                    data.map((item) => (
                                        <option key={item.id}>
                                            {item.title}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='flex gap-5'>
                            <button
                                className="w-full h-10 mt-7 text-center bg-green-500 text-white font-semibold text-xl rounded-md hover:bg-green-600"
                                type="submit"
                            >
                                {isEdit.type ? "Edit" : "Create food"}
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

export default Products