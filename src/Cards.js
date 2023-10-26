import card1 from './Images/baby-store-promo-banner-img-1.png';
import card2 from './Images/baby-store-promo-banner-img.png';
import card3 from './Images/baby-store-promo-banner-img-3.png';
import useWindowSize from './useWindowSize';
const Cards = () =>{
    const size = useWindowSize()
    return(
        <div className={size.width>=600?"flex flex-wrap mx-20 mt-10":'mt-10'}>
        <div className={size.width>=600?'mx-6 w-96 h-72 rounded-lg card1  flex justify-center mt-4':'mx-2 w-full h-72 rounded-lg card1  flex justify-center mt-4'}>
         <div className='relative'>
           <img src={card1} className=' absolute z-1 top-24' />
            <div className='bodyText mt-10'>Best Choice For Your</div>
            <h1 className=' bodyText font-bold text-5xl mt-2'> Princess</h1>
            <div className='absolute bottom-4 color font-bold ml-6'>SHOP NOW</div>
            </div>
        </div>
        <div className={size.width>=600?'mx-6 w-96 h-72 rounded-lg card2 flex justify-center mt-4':'mx-2 h-72 rounded-lg card2 flex justify-center mt-4'}>
        <div className='relative '>
           <img src={card2} className='absolute z-1 right-0' />
           <div className='ml-4 w-1/2'>
            <div className='color mt-10 '>20% OFF</div>
            <h1 className=' bodyText font-bold text-5xl mt-2'> New Born Essentials</h1>
            <div className='text-sm text-gray-700'>Id neque nunc in tortor nec posuere proin.</div>
            <div className=' color font-bold flex justify-center'>SHOP NOW</div>
            </div>
        </div>
        </div>
        <div className={size.width>=600?'mx-6 w-96 h-72 rounded-lg cards3 mt-4':'mx-2 h-72 rounded-lg cards3 mt-4'}>
    <div className='card3 relative'>
        <div className='absolute top-2 right-0 text-sm text-white p-2 rounded-tr-lg'>
            20% Offer
        </div>
        <div className='text-sm font-bold text-white p-4'>New Arrivals</div>
        <div className='font-bold text-white pl-4 text-4xl'>Hot Toys</div>
        <div className='flex justify-center'> 
            <img src={card3} alt='Card Image' />
        </div>
        <div className=' color font-bold mt-2 flex justify-center'>SHOP NOW</div>
    </div>
</div>



</div>
    )
}

export default Cards;