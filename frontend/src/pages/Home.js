import React from 'react'
import martManimg from '../assets/grocery-image.png'

const Home = () => {
    return (
        <div className='bg-black w-full p-2 md:p-4'>
            <div class=" text-white">
                <h1 className=" text-5xl">Groceries<br /><span className='text-red-600'>delivery in 15 mins</span></h1>
                <p className="pt-4">Gracify offer a wide range of products,including fresh products,meats,<br />dairy,bread
                    goods and
                    non-perishable items</p>

            </div>
            <img src={martManimg} className="w-full" alt=''></img>
        </div>
    )
}

export default Home