import React from 'react'

function HomeCart({ image, name, price }) {
    return (
        <div className='bg-white p-2 rounded shadow-md shadow-slate-200 min-h-[120px]'>
            <div className='w-20 min-h-[100px]'>
                <img src={image} alt='' className='w-full h-full'></img>
                <h1 className='text-black text-center pt-5'>{name}</h1>
                <p className='text-black text-center font-semibold '><span className='text-red-600 pr-1'>₹</span><span>{price}</span></p>
                {/* <button className='bg-red-500 w-full rounded-md hover:bg-red-600'>Add Cart</button> */}
            </div>
        </div>
    )
}

export default HomeCart