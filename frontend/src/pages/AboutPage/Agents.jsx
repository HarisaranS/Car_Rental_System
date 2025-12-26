import { CiFacebook, CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

const Agent = () => {
   const clients = [
      {
         id : 1,
         photo : 'https://travila.alithemes.com/wp-content/uploads/2024/10/team-new6.webp',
         name : 'Sadixova SA',
         designation : 'HR, ABC Company'
      },
      {
         id : 2,
         photo : 'https://travila.alithemes.com/wp-content/uploads/2024/10/team-new4.webp',
         name : 'Rebeca Welson',
         designation : 'HR, ABC Company'
      },
      {
         id : 3,
         photo : 'https://travila.alithemes.com/wp-content/uploads/2024/10/team-new5.webp',
         name : 'Sadixova SA',
         designation : 'HR, ABC Company'
      },
      {
         id : 4,
         photo : 'https://travila.alithemes.com/wp-content/uploads/2024/10/team-new1.webp',
         name : 'Sadixova SA',
         designation : 'HR, ABC Company'
      }
   ]
   return (
      <div>
         <h1 className="text-2xl font-serif font-semibold sm:text-4xl text-center py-16">Meet Our Agents</h1>

         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            
            {clients.map(client => <div key={client.id}>
               <div>
                  <img src={client.photo} alt="" className='w-full' />
               </div>
               <div className='pt-5 space-y-2'>
                  <h3 className='text-2xl font-serif text-gray-800'>{client.name}</h3>
                  <p className='text-[#a29f9f]'>{client.designation}</p>
                  <div className='flex items-center space-x-2 *:text-2xl *:cursor-pointer hover:*:text-[#fb320f]'>
                     <CiFacebook />
                     <CiInstagram />
                     <RiTwitterXFill />
                  </div>
               </div>
            </div>) }
            
           


         </div>

      </div>
   );
};

export default Agent;