import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import Navbar from '../../components/Navbar'
import axios from 'axios'

export default function Taomlar() {

    const { state } = useLocation()
    const url = "http://localhost:8080/foods"
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
            <Navbar />
            {state === null ? (
                <div className='text-center text-xl mt-5'>Data mavjud emas</div>
            ) : (
                <div>
                    <div className='mt-5 px-5'>
                        <div className='pb-5 font-bold text-lg'>
                            Popular Catagories
                        </div>
                        <div>
                            <Carousel />
                        </div>
                    </div>

                    <div className='mt-5'>
                        {
                            data.map((item) => {
                                if (state === item.catagoryName || state === "all") {
                                    return (
                                        <div className='px-5' key={item.id}>
                                            <div
                                                style={{
                                                    backgroundImage: `url(${item.img})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center center"
                                                }}
                                                onClick={() => navigate("/cart", { state: item })}
                                                className='w-full h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px]'
                                            >
                                            </div>

                                            <div>
                                                <div className='flex py-2 font-semibold text-lg justify-between'>
                                                    <div>
                                                        {item.name}
                                                    </div>
                                                    <div>
                                                        {item.price}
                                                    </div>
                                                </div>

                                                <div className='pb-5 text-sm font-medium'>
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            )}
        </>
    )
}
