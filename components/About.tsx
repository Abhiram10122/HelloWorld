import React from 'react';

const About1 = ({contents}: any) => {
  return (
  <div className={`min-h-screen ${contents.background} flex items-center justify-center flex-col pt-5`}>
     {/* <div>
        <p className="text-center text-4xl w-full my-12 font-semibold pb-0">About</p>
     </div> */}
     <div className=' flex flex-wrap px-4 items-center '>
        <div className='w-full px-12 lg:w-1/2  items-center py-8'>
                <img src={contents.picture} alt="" className='rounded-3xl ' />
        </div>
        <div className='w-full px-12 lg:w-1/2 flex flex-col items-start justify-start py-8'>
            <p className="text-4xl w-full my-12 font-semibold pb-0">{contents.title}</p>
            <p className='pb-4 font-montserrat text-2xl'>
                {contents.content}
            </p>
            {/* <p className='pb-4 font-montserrat text-2xl'>
            Trying to figure a way out through this mountain towards a great destination with a great journey on the way is not at all easy.
            </p>     */}
        </div>    
     </div>
    </div>
  )
}

export default About1