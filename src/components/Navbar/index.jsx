import { CgShoppingCart } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from "react-use-cart";

export default function Navbar() {

    const navigate = useNavigate()
    const { totalItems } = useCart()

    return (
        <div className='py-3 shadow-xl'>
            <div className='flex justify-around'>
                <button className="text-xl mt-[2px]">
                    <GiHamburgerMenu />
                </button>
                <button className="text-xl" onClick={() => navigate("/")}>
                    Menu
                </button>
                <button className="text-xl flex">
                    <CgShoppingCart onClick={() => navigate("/Shop")} />
                    <span className="text-sm w-[20px] -top-2 relative h-[20px] text-white flex justify-center items-center bg-blue-500 rounded-full">{totalItems}</span>
                </button>
            </div>
        </div>
    )
}
