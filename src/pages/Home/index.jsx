import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar'

export default function Home() {
    const navigate = useNavigate()
    const url = "http://localhost:8080/catagory"
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
            <Navbar />
            <div className='mt-10'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 lg:px-10 gap-2'>
                    <div>
                        <button
                            onClick={() => navigate("/Taomlar", { state: "all" })}
                            className='flex justify-center items-center text-white text-lg font-medium'
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2A93LVwwcDnTCBzKFgBGbljMEBLl21CyMzQ&usqp=CAU)`,
                                height: '170px',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                width: "100%"
                            }}
                        >
                            All
                        </button>
                    </div>
                    {
                        data.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate("/Taomlar", { state: item.title })}
                                className='flex justify-center items-center'
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${item.img})`,
                                    height: '170px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <p className='text-white text-lg font-medium'>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}