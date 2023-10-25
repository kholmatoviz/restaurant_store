import React from 'react'

function Login() {
    return (
        <div>
            <div className='w-full'>
                <div className='mx-10 h-[400px] my-10 bg-gray-400'>
                    <div className='flex justify-center h-full items-center'>
                        <div>
                            <div>
                                <p className='text-white text-lg font-medium'>Login</p>
                            </div>

                            <div>
                                <div>
                                    <p className='text-sm'>Email</p>
                                    <input type="email" />
                                    <hr />
                                </div>

                                <div>
                                    <p className='text-sm'>Parol</p>
                                    <input type="text" />
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login