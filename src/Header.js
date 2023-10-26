import logo from './Images/baby-store-logo.svg'
import {PiBasketFill} from 'react-icons/pi'
import {BiSolidUser} from 'react-icons/bi';
import useWindowSize from './useWindowSize';
const Header = () =>{
    const size = useWindowSize();
    return(
<div className='p-6'>
    <div className='flex justify-between'>
        <div className='flex'>
        <img src={logo} alt='image' />
        {size.width >= 768 &&
        <ul className='flex mt-1 text-gray-700'>
        <li className='ml-8 mr-2 color'>Home</li>
        <li className='mx-2'>Shop</li>
        <li className='mx-2'>About Us</li>
        <li className='mx-2'>Contact Us</li>
        </ul>
}
        </div>
        <div className='flex justify-end'>
        {size.width >= 768 &&
        <>
            <input placeholder=' Search Products...' className='w-40 border border-gray-300 rounded' />
            <button className='background text-white w-8 rounded ml-1'>{'>'}</button>
            </>
        }
            <PiBasketFill className='color w-6 h-6 mt-1 ml-2'/>
            <BiSolidUser className=' mx-2 mt-1 w-6 h-6 ' />
        </div>
    </div>
</div>
    )
    }
export default Header; 