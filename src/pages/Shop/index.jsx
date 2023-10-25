import React from "react";
import { useCart } from "react-use-cart";
import Navbar from "../../components/Navbar";

export default function Shop() {
    const {
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const handleClick = () => {
        alert("Buyurtma berildi")
    }

    return (
        <div>
            <Navbar />
            <div className="flex justify-center mt-5 items-center">
                <p className="text-2xl font-bold">Your Orders</p>
            </div>

            <div className="px-2 mt-10">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-black">
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => (
                                <tr className="border-y border-black">
                                    <td className="py-2 px-1">
                                        <img src={item.img} alt="" className="h-[5rem]" />
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className="text-center">
                                        {item.price}
                                    </td>
                                    <td className="mt-4 text-center">
                                        <div className="flex justify-center">
                                            <button
                                                style={{ border: "2px solid red" }}
                                                className="md:px-5 px-2 rounded-full"
                                                onClick={() =>
                                                    updateItemQuantity(item.id, item.quantity - 1)
                                                }
                                            >
                                                -
                                            </button>
                                            <div className="py-1 px-1 ml-1">
                                                {item.quantity}
                                            </div>
                                            <button
                                                style={{ border: "2px solid #fcba03" }}
                                                className="md:px-5 px-2 rounded-full"
                                                onClick={() =>
                                                    updateItemQuantity(item.id, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className="px-2 md:px-10 py-1 mt-1  bg-red-500 text-white font-medium"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table >

                <br />
                <div className="col-auto ms-auto">
                    <h3>Totol Price: {cartTotal} UZS</h3>
                </div>
                <div className="col-auto ms-auto">
                    <button
                        className="px-6 py-2 rounded-md bg-red-500 text-white font-medium m-2"
                        onClick={() => emptyCart()}
                    >
                        Clear Cart
                    </button>
                    <button onClick={() => handleClick()} className="px-6 py-2 rounded-md bg-green-500 text-white font-medium m-2">
                        Pay Now
                    </button>
                </div>
            </div >
        </div >
    );
};


// <div>
//             <Navbar />
//             <div className="flex justify-center mt-5 items-center">
//                 <p className="text-2xl font-bold">Your Orders</p>
//             </div>
//             <div className="flex justify-center">
//                 <div className="w-[95%] mt-10 md:w-[90%] xl:w-[80%]">
//                     <div className="col-12">
//                         <table className="table-auto m-0">
//                             <tbody>
//                                 <tr>
//                                     <th className="px-5 py-2">
//                                         <b>Product</b>
//                                     </th>
//                                     <th className="px-5 py-2">
//                                         <b>Name</b>
//                                     </th>
//                                     <th className="px-5 py-2">
//                                         <b>Price</b>
//                                     </th>
//                                     <th className="px-5 py-2">
//                                         <b>Action</b>
//                                     </th>
//                                 </tr>
//                                 {items.map((item, index) => {
//                                     return (
//                                         <tr key={index} className="border-y  border-black">
//                                             <td className="py-2">
//                                                 <img
//                                                     src={item.img}
//                                                     style={{ height: "6rem" }}
//                                                     alt=""
//                                                 />
//                                             </td>
//                                             <td className="px-5 py-2 text-center">{item.name}</td>
//                                             <td className="px-5 py-2 text-center">{item.price}</td>
//                                             <td className="mt-4">
//                                                 <div className="flex">
//                                                     <button
//                                                         style={{ border: "2px solid red" }}
//                                                         className="md:px-5 px-2 rounded-md py-1 ms-1"
//                                                         onClick={() =>
//                                                             updateItemQuantity(item.id, item.quantity - 1)
//                                                         }
//                                                     >
//                                                         -
//                                                     </button>
//                                                     <div className="py-2 px-2 ml-1">
//                                                         {item.quantity}
//                                                     </div>
//                                                     <button
//                                                         style={{ border: "2px solid #fcba03" }}
//                                                         className="md:px-5 px-2 rounded-md py-1 ms-1"
//                                                         onClick={() =>
//                                                             updateItemQuantity(item.id, item.quantity + 1)
//                                                         }
//                                                     >
//                                                         +
//                                                     </button>
//                                                 </div>
//                                                 <div>
//                                                     <button
//                                                         className="px-2 md:px-10 py-1 mt-1 rounded-md bg-red-500 text-white font-medium ms-2"
//                                                         onClick={() => removeItem(item.id)}
//                                                     >
//                                                         Remove
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     );
//                                 })}
//                             </tbody>
//                         </table>
//                     </div>
//                     <br />
//                     <div className="col-auto ms-auto">
//                         <h3>Jammi Summa: {cartTotal} UZS</h3>
//                     </div>
//                     <div className="col-auto ms-auto">
//                         <button
//                             className="px-6 py-2 rounded-md bg-red-500 text-white font-medium m-2"
//                             onClick={() => emptyCart()}
//                         >
//                             Clear Cart
//                         </button>
//                         <button onClick={() => handleClick()} className="px-6 py-2 rounded-md bg-green-500 text-white font-medium m-2">
//                             Pay Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>