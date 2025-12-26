import video_1 from '../../assets/video.mp4'
import {Link} from 'react-router-dom'

const Details = () => {
   return (
      <div className='flex items-center justify-between flex-col sm:flex-row my-20 gap-y-8'>
         <div className='basis-[45%]'>
            <video src={video_1} autoPlay loop muted playsInline className='w-full rounded-xl'></video>
         </div>
         <div className='basis-[50%] space-y-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold font-serif'><span className='text-[#960bd2]'>Car - Hire</span></h1>
            <p className='sm:text-2xl text-xl font-light'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <h2 className='text-xl sm:text-3xl font-semibold text-[#8a54ed]'>+880 1875778050</h2>
            <Link to='/' className='btn inline-block'>Get a Car</Link>
         </div>
      </div>
   );
};

export default Details;