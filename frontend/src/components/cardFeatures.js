import React from 'react'

const CardFeatures = ({ image, name, price }) => {
    return (
        <div className='bg-white w-full min-w-[180px] drop-shadow-md hover:shadow-lg cursor-pointer flex flex-col justify-center px-4 py-5'>
            <div className='h-28 flex flex-col justify-center'>
                <img src={image} alt='' className='h-full' />
            </div>
            <h1 className='text-black pt-5'>{name}</h1>
            <p className='text-black  font-semibold '><span className='text-red-600 pr-1'>₹</span><span>{price}</span></p>
            <button className='bg-red-500 w-full rounded-md hover:bg-red-600 px-0'>Add Cart</button>

        </div>
    )
}

export default CardFeatures