import about_img from '../../assets/cars/how-works.png'
const About_car = () => {
   return (
      <div className='py-20 flex gap-16'>
         <div className='space-y-1'>
            <h2 className='text-3xl font-bold'>How It Work ?</h2>
            <p className='text-lg text-gray-600'>Just 4 easy and quick steps</p>
            <img src={about_img} alt="about_img" className='w-full pt-10' />
         </div>
         <div className='space-y-12'>
            <div className='flex space-x-4 group duration-200'>
               <div>
                  <span className='text-3xl font-bold bg-gray-200 px-3 rounded-full group-hover:bg-black group-hover:text-white '>1</span>
               </div>
               <div className='space-y-2'>
                  <h3 className='text-xl font-semibold'>Browse and Select</h3>
                  <p className='text-sm font-light'>Easily find your perfect car. Filter by model, brand, and size for a seamless selection process.</p>
               </div>
            </div>
            <div className='flex space-x-4 group'>
               <div>
                  <span className='text-3xl font-bold bg-gray-200 px-3 rounded-full group-hover:bg-black group-hover:text-white '>2</span>
               </div>
               <div className='space-y-2'>
                  <h3 className='text-xl font-semibold'>
                     Booking and Reservation</h3>
                  <p className='text-sm font-light'>Quickly reserve with flexible dates and locations. Real-time availability updates ensure a smooth booking experience.</p>
               </div>
            </div>
            <div className='flex space-x-4 group'>
               <div>
                  <span className='text-3xl font-bold bg-gray-200 px-3 rounded-full group-hover:bg-black group-hover:text-white '>3</span>
               </div>
               <div className='space-y-2'>
                  <h3 className='text-xl font-semibold'>Payment and Confirmation</h3>
                  <p className='text-sm font-light'>Secure payments, various methods accepted. Instant confirmation for a hassle-free rental process.</p>
               </div>
            </div>
            <div className='flex space-x-4 group'>
               <div>
                  <span className='text-3xl font-bold bg-gray-200 px-3 rounded-full group-hover:bg-black group-hover:text-white '>4</span>
               </div>
               <div className='space-y-2'>
                  <h3 className='text-xl font-semibold'>
                  Pickup and Return</h3>
                  <p className='text-sm font-light'>Effortless pickup and return. Simple documentation, optional services like delivery, and excellent customer support.</p>
               </div>
            </div>

         </div>
      </div>
   );
};

export default About_car;