import img from '../../assets/cars/hero-car.png'
const Sub_banner = () => {
   return (
      <div className='bg-gradient-to-tr from-purple-50 to-red-50 flex items-center justify-between max-h-[450px] rounded-xl p-12 border '>

         <div className='basis-[60%] pr-4 sm:pr-8 space-y-5'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl font-extrabold font-serif'>A new way to experience.</h1>
            <h3 className='text-xl sm:text-xl font-light'>Enjoy our seasonal menu and experience the beauty of naturalness</h3>
         </div>
         <div className='basis-[35%]'>
            <img src={img} alt="banner_img" className='w-full rounded-l-xl' />
         </div>
      </div>
   );
};

export default Sub_banner;