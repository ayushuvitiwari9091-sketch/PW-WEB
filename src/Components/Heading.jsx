import React from 'react'

const Heading = ({Headingtext}) => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>

        <span className='font-bold text-4xl mt-8'>{Headingtext?.Heading}</span>

        <p className='mt-5'>{Headingtext?.span}</p>
    </div>
    </>
  )
}

export default Heading