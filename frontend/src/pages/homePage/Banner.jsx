import banner from '../../assets/cars/banner.png'
import google from '../../assets/googleplay-1.png'
import store from '../../assets/appstore-1.png'
import icon from '../../assets/icon.svg'
const Banner = () => {
    return (
        <div className='flex items-center justify-between py-20 flex-col sm:flex-row gap-y-6'>
            <div className='basis-[48%] space-y-6'>
                <div className=' bg-purple-50 w-56 text-center border border-purple-200 py-2 px-4  rounded-full flex items-center space-x-2 '>
                    <img src={icon} alt="" className='w-8' />
                    <h3 className='font-serif font-light  text-purple-600 italic'>Explore The World</h3>

                </div>
                <h1 className="text-4xl font-extrabold md:text-6xl font-serif" style={{ lineHeight: '4rem' }}>
                    The Best Place To Rent A Car For Your Journey
                </h1>

                <p className="text-[#868383] font-light">Enjoy your journey with your family and pay us for it.</p>
                <div className='flex items-center space-x-6 py-6'>
                    <img src={google} alt="" />
                    <img src={store} alt="" />
                </div>
                
            </div>
            <div className='basis-[50%]'>
                <img src={banner} alt="" className='w-full rounded-t-full' />
            </div>
        </div>
    );
};

export default Banner;