
const Sponsored = () => {
   const sponsored = [
      {
         image: 'https://travila.alithemes.com/wp-content/uploads/2024/09/bugatti.svg'
      },
      {
         image: 'https://travila.alithemes.com/wp-content/uploads/2024/09/jaguar.svg'
      },
      {
         image: 'https://travila.alithemes.com/wp-content/uploads/2024/09/honda.svg'
      },
      {
         image: 'https://travila.alithemes.com/wp-content/uploads/2024/09/chevrolet.svg'
      },
      {
         image: 'https://travila.alithemes.com/wp-content/uploads/2024/09/acura.svg'
      },
      {
         image: 'https://travila.alithemes.com/wp-content/uploads/2024/09/bmw.svg'
      },
      {
         image: 'https://travila.alithemes.com/wp-content/uploads/2024/09/lexus.svg'
      },
      {
         image: 'https://travila.alithemes.com/wp-content/uploads/2024/09/mercedes.svg'
      }
   ]
   return (
      <div className='flex items-center justify-between pb-10'>
         {
            sponsored.map((item, i) => <div className='flex items-center' key={i}>
               <img src={item.image} alt="" className='w-full max-w-20' />
            </div>)
         }
      </div>
   );
};

export default Sponsored;