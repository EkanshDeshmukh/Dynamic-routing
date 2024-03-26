import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const GoBackHandler = () =>{
        navigate(-1)
    }
     

    return (
        <div className='w-1/2 m-auto mt-10'>
            <h1 className='text-red-200 text-5xl mb-2'>User Details</h1>
            <h1 className='mt-5 mb-5 text-slate-600 text-xl font-semibold '>HIiii !!! {name} </h1>
            <button onClick={GoBackHandler}  className='px-3 py-2 text-white bg-zinc-600 rounded '>Go Back</button>

        </div>
    )
}

export default UserDetail