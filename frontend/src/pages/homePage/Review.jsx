import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Review = () => {

   const reviews = [
      {
         id : 1,
         photo : 'https://simgbb.com/avatar/6YGwSWkXwQ0Y.jpg',
         name : 'MD Arman Khan',
         desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
         company : 'HR, XYZ Company'
      },
      {
         id : 2,
         photo : 'https://i.ibb.co.com/m4xS62K/pexels-anntarazevich-5234256.jpg',
         name : 'Jahir Don',
         desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
         company : 'HR, ABC Company'
      },
      {
         id : 3,
         photo : 'https://i.ibb.co.com/qn4FL6C/pexels-nikitash-21839018.jpg',
         name : 'Shetej jaw',
         desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
         company : 'HR, XYZ Company'
      },
      {
         id : 4,
         photo : 'https://i.ibb.co.com/yXjGjdW/arman-2545.jpg',
         name : 'John Dey',
         desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
         company : 'HR, XYZ Company'
      },
      {
         id : 5,
         photo : 'https://i.ibb.co.com/mCHjCgb/61910047-476580143080947-7064381149266575360-n.jpg',
         name : 'Roki khan',
         desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!',
         company : 'HR, XYZ Company'
      },
   ]


   return (
      <div>

         <div className="pb-10">
            <h2 className="text-3xl font-semibold sm:text-5xl ">What Our Clients Say</h2>
         </div>

         <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={
               {
                  700 : {
                     slidesPerView : 3,
                     spaceBetween : 15
                  }
               }
            }
         >

            {
               reviews.map(review => <SwiperSlide key={review.id} className='mb-12'>
                  <div className="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border">
                     <div className="flex justify-center -mt-16 md:justify-end">
                        <img className="object-cover w-20 h-20 border-2 border-purple-500 rounded-full" alt="Testimonial avatar" src={review.photo} />
                     </div>
   
                     <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">{review.name}</h2>
   
                     <p className="mt-2 text-sm text-gray-600">{review.desc}</p>
   
                     <div className="flex justify-end mt-4">
                        <p>{review.company}</p>
                     </div>
                  </div>
   
               </SwiperSlide>)
            }

            
            

         </Swiper>

         

      </div>
   );
};

export default Review;