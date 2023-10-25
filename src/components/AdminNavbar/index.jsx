import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminNavbar() {

    const navigate = useNavigate()

    return (
        <div>
            <div>
                <div className='flex justify-around py-3 font-medium shadow-xl'>
                    <div>
                        <button onClick={() => navigate("/Admin")}>Catagorys</button>
                    </div>
                    <div>
                        <button onClick={() => navigate("/Product")}>Mahsulotlar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar