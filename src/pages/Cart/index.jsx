import { AiOutlineRollback } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCart } from "react-use-cart";
import Navbar from "../../components/Navbar";

function Cart() {

    const { state } = useLocation()
    const navigate = useNavigate()
    const { addItem, items } = useCart();
    const [button, setButton] = useState(false)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        items.filter((elem) => {
            if (state.id === elem.id) {
                setButton(true)
            } else {
                setButton(false)
            }
        })

    }, [refresh])

    const handleClick = (state) => {
        addItem(state)
        setRefresh(true)
    }


    return (
        <>
            <Navbar />
            {
                state === null ? (
                    <div className='text-center text-xl mt-5'>Data mavjud emas</div>
                ) : (
                    <div className='p-5'>
                        <div className="flex gap-24">
                            <button onClick={() => navigate("/Taomlar", { state: "all" })} className="px-2 py-1 text-xl bg-blue-500 rounded-md text-white">
                                <AiOutlineRollback />
                            </button>

                            <div className='text-lg flex justify-center font-semibold'>
                                {state.title}
                            </div>
                        </div>

                        <div className="mt-5">
                            <Carousel useKeyboardArrows={true}>
                                {state.images.map((item, ind) => (
                                    <div key={ind + 1}>
                                        <img src={item} alt="" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>

                        <div className='mt-5 font-semibold text-lg'>
                            <div>
                                {state.desc}
                            </div>
                        </div>

                        <div className="flex mt-10 justify-between">
                            <div>
                                <div className="h-[40px] flex items-center border border-black px-10 rounded-lg">
                                    {state.price}
                                </div>
                            </div>

                            <div>
                                {
                                    button ? (
                                        <div className="rounded-md px-16 py-2 bg-gray-600 text-white">Buyurtma berilgan</div>
                                    ) : (
                                        <button onClick={() => handleClick(state)} className="rounded-md px-16 py-2 bg-green-600 text-white">Add to Cart</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Cart