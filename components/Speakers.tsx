import Image from "next/image";

const Speakers = ({pic, name}: any) => {
  return (
        // <div className="flex justify-between items-center max-container max-sm:flex-col px-10 py-20 gap-5">
        //         <div className="flex flex-1 justify-center items-center">
        //             <img src="/profileImage.jpeg" alt="checking" className="object-contain rounded-md" width={270} height={272}/>
        //         </div>
        //         {/* <div className='sm:w-[50%] flex justify-center py-5'>
        //             <Image src="/profileImage.jpeg" alt="profile" width={250} height={250} className='rounded-[2rem]'/>
        //         </div> */}
        //         <div className='md:w-[50%] w-full flex flex-1 flex-col'>
        //             <h1 className='text-4xl font-palanquin font-bold lg:max-w-lg'> Dinesh</h1>

        //             <p className='lg:max-w-lg info-text mt-4'>
        //                 This is Dinesh. He is the coolest guy in existense, why !??... Did you 
        //                 look at his hair? Bro can rizz any one in our college.
        //             </p>
        //         </div>
        // </div>
        <div className="flex flex-1 flex-col relative justify-end items-center">
            <Image className="rounded-md" src={pic} alt="profile" width={200} height={200}/>
            <div className="absolute shadow-2xl">
                <h1 className="font-montserrat font-bold text-2xl shadow">{name}</h1>
            </div>
        </div>
  )
}

export default Speakers