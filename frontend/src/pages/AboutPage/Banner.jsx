import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg'

const Banner = () => {
   return (
      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,100,0.5)), url(${banner})` }} className='w-full py-24 bg-center
       bg-cover rounded-xl mt-12'>
         <div className='text-white text-center space-y-4'>
            <h1 className='font-serif text-2xl sm:text-4xl font-semibold'>About</h1>
            <ul className='space-x-5 *:font-semibold hover:*:underline'>
               <Link to='/'>Home</Link>
               <Link to='/cars'>All Cars</Link>
            </ul>
         </div>
      </div>
   );
};

export default Banner;