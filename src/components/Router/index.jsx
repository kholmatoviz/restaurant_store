import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Taomlar from '../../pages/Taomlar'
import Cart from '../../pages/Cart'
import Shop from '../../pages/Shop'
import Login from '../../components/LoginAdmin'
import Admin from '../../pages/Admin'
import Product from '../../pages/Product'
import Catagory from '../../crud/Catagory'
import Products from '../../crud/Product'

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Taomlar' element={<Taomlar />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/Shop' element={<Shop />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Admin' element={<Admin />} />
                <Route path='/Product' element={<Product />} />
                <Route path='/Catagory' element={<Catagory />} />
                <Route path='/Products' element={<Products />} />
            </Routes>
        </div>
    )
}
