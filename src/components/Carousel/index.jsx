import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Carousel() {

    const url = "http://localhost:8080/catagory"
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <Swiper
                slidesPerView={4}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                    320: {
                        slidesPerView: 3.5,
                    },
                    425: {
                        slidesPerView: 4.3,
                    },
                    768: {
                        slidesPerView: 7.5,
                    },
                }}
            >
                {
                    data.map((item) => (
                        <SwiperSlide>
                            <div key={item.id}>
                                <div
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: "100%",
                                    }}
                                    className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]'
                                    onClick={() => navigate("/Taomlar", {state: item.title})}
                                >
                                </div>
                                <p className='text-base text-center w-[60px] md:w-[80px] lg:w-[100px] font-medium'>{item.title}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel