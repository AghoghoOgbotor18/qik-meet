import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <div className='flex flex-col items-center gap-4 justify-center items -center py-30'>
        <h2 className='font-black text-4xl'>Page Not Found</h2>
        <p>Go back to <Link to="/" className='text-blue-600'>Home</Link></p>
        </div>
    )
}

export default NotFound
