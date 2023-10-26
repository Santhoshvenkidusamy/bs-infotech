import card1 from './Images/baby-store-product-img-9.jpg'
import card2 from './Images/baby-store-product-img-10.jpg'
import card3 from './Images/baby-store-product-img-11.jpg'
import card4 from './Images/baby-store-product-img-12.jpg'
import card5 from './Images/baby-store-product-img-8.jpg'
import card6 from './Images/baby-store-product-img-7.jpg'
import card7 from './Images/baby-store-product-img-6.jpg'
import card8 from './Images/baby-store-product-img-5.jpg'
import baby from './Images/baby-store-featured-collection-banner.jpg'
import {AiOutlineStar} from 'react-icons/ai';
import useWindowSize from './useWindowSize'

const Stars =() =>{
    return(
        <div className='flex m-2'>
             <AiOutlineStar className='text-yellow-500'/>
             <AiOutlineStar className='text-yellow-500'/>
             <AiOutlineStar className='text-yellow-500'/>
             <AiOutlineStar className='text-yellow-500'/>
             <AiOutlineStar className='text-yellow-500'/>
        </div>
    )
}
const NewArrivals = () =>{
  const size = useWindowSize();
    return(
        <div className="newArrival">
            <div className='h-10'></div>
            <div className='mt-10'>
                <div className="bodyText font-bold text-5xl flex justify-center">New Arrivals</div>
                <div className="text-gray-700 mt-4 flex justify-center">Scelerisque duis semper vitae eget mattis viverra sem risus vel suspendisse lorem vestibulum pulvinar habitant sed.</div>
                <div className='mx-28 mt-6 flex flex-wrap'>
                     <div className='mx-2 mt-4'>
                       <img src={card4} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Extra Soft Touch Lamb Doll</div>
                       <div className='font-bold text-gray-700 m-2'>$ 8.50</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card3} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Twin Cute Bunny Set Combo</div>
                       <div className='font-bold text-gray-700 m-2'>$ 40.25</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card2} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Colorful Birdies on Orange Bandana</div>
                       <div className='font-bold text-gray-700 m-2'>$ 4.75</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card1} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Nutrikids Food Nutrition DHA+ Orange</div>
                       <div className='font-bold text-gray-700 m-2'>$ 6.50</div>
                       <Stars/>
                     </div>
                </div>
            </div>
            <div className={size.width >=1224 ?'mt-20 flex flex-wrap':'mt-20'}>
             <img src={baby}  alt='images' className={size.width >=1224 ?'h-2/3 w-2/5':'h-2/3'} style={{ minWidth: '200px', minHeight: '200px' }} />
              <div className={size.width >=1224 ?'cardColor rounded-r-lg w-2/5 flex':'cardColor rounded-lg  flex'} style={{ minWidth: '200px', minHeight: '200px' }}>
              <div className='m-10'>
              <div>Seasonal Special</div>
               <h1 className='bodyText font-bold text-5xl mt-10'>Winter Collection. Grab Them Now!</h1>
               <div className='text-sm mt-10 text-gray-700'>Cum sed purus felis, morbi diam mauris sollicitudin id aenean sed fusce pellentesque enim viverra luctus enim suspendisse feugiat convallis imperdiet.</div>
               <button className='background text-white font-bold border rounded-md p-2 mt-4'>SHOP COLLECTION</button>
            </div>
        </div>
   </div>
   <div className='mt-10'>
                <div className="bodyText font-bold text-5xl flex justify-center">Best Seller</div>
                <div className='flex justify-center  text-gray-700'>Scelerisque duis semper vitae eget mattis viverra sem risus vel suspendisse lorem vestibulum pulvinar habitant sed.</div>
        </div>
        <div className='mx-28 mt-10 flex flex-wrap'>
                     <div className='mx-2 mt-4'>
                       <img src={card4} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Extra Soft Touch Lamb Doll</div>
                       <div className='font-bold text-gray-700 m-2'>$ 8.50</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card3} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Twin Cute Bunny Set Combo</div>
                       <div className='font-bold text-gray-700 m-2'>$ 40.25</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card2} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Colorful Birdies on Orange Bandana</div>
                       <div className='font-bold text-gray-700 m-2'>$ 4.75</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card1} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Nutrikids Food Nutrition DHA+ Orange</div>
                       <div className='font-bold text-gray-700 m-2'>$ 6.50</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card5} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Sunny Outdoor Picnic Set Yellow</div>
                       <div className='font-bold text-gray-700 m-2'>$ 6.50</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card6} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Teddy Bear Ready To Flight Doll</div>
                       <div className='font-bold text-gray-700 m-2'>$ 6.50</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card7} alt='images'/>
                       <div className='bodyText mt-4 m-2'>VitCom Nutrition Fruits Flavor</div>
                       <div className='font-bold text-gray-700 m-2'>$ 6.50</div>
                       <Stars/>
                     </div>
                     <div className='mx-2 mt-4'>
                       <img src={card8} alt='images'/>
                       <div className='bodyText mt-4 m-2'>Frosted White Plastic Bottle</div>
                       <div className='font-bold text-gray-700 m-2'>$ 6.50</div>
                       <Stars/>
                     </div>
                </div>

        </div>
    )
}

export default NewArrivals;