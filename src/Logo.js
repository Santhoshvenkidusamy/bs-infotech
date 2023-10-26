import logo1 from './Images/logo-1.svg';
import logo2 from './Images/logo-2.svg';
import logo3 from './Images/logo-3.svg';
import logo4 from './Images/logo-4.svg';
import card1 from './Images/toys.png'
import card2 from './Images/clothes.png'
import card3 from './Images/nutrition.png'
import card4 from './Images/card1.png';
import card5 from './Images/card2.png';
import {BsArrowRightShort} from 'react-icons/bs';
import useWindowSize from './useWindowSize';
const Logo = () =>{
   const size = useWindowSize()
    return(
        <div className='mx-20'>
        <div className="flex flex-wrap mt-10 mx-20">
             <div className='mx-10'>
                <img src={logo1} className='' alt='image'/>
             </div>
             <div className='mx-10'>
                <img src={logo2} alt='image'/>
             </div>
             <div className='mx-10'>
                <img src={logo3} alt='image'/>
             </div >
             <div className='mx-10'>
                <img src={logo4} alt='image'/>
             </div>
        </div>
        <div className='mt-14 flex flex-wrap mx-28'>
           <div className='w mx-6 mt-4 image'>
            <img src={card1} alt='image' className='rounded-lg'/>
           </div>
           <div className=' mx-6 mt-4'>
            <img src={card2} alt='image' className='rounded-lg'/>
           </div>
           <div className='rounded mx-6 mt-4'>
            <img src={card3} alt='image' className='rounded-lg'/>
           </div>
        </div>
        <div className='mt-40'>
         <h1 className='bodyText font-bold text-5xl flex justify-center'>Why They Love Us</h1>
         <div className='mt-6 color flex justify-center font-bold'>VIEW ALL TESTIMONIAL <BsArrowRightShort  className='mt-1 ml-2'/></div>
         <div className='mt-14 flex flex-wrap'>
           <div className='w mx-2 mt-4 image'>
            <img src={card4} alt='image' className='rounded-lg'/>
           </div>
           <div className=' mx-2 mt-4'>
            <img src={card5} alt='image' className='rounded-lg'/>
           </div>
        </div>
        </div>
        <div className={size.width>=768?'mx-32 mt-12 flex':'mt-12 flex'}>
            <div className='p-6 elementColor rounded-md w-full'>
                  <div className='bodyText p-4'>SUBSCRIBE TO OUR NEWSLETTER</div>
                  <h1 className='bodyText font-bold text-5xl p-4'>Don't Miss Out!</h1>
                  <div className='text-sm p-2 text-gray-700'>Get the latest on sales, special offer, new releases and more…</div>
                  <input placeholder=' Search Products...' className=' w-2/4  p-2 border border-gray-300 rounded' />
                  <button className='background text-white font-bold  text-md border rounded-md p-2 ml-2'>SUBSCRIBE</button>
                  <button></button>
            </div>
        </div>
        </div>
    )
}
export default Logo;