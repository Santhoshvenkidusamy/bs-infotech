import logo from './Images/baby-store-logo.svg'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import useWindowSize from './useWindowSize'
const Footer = () =>{
    const size = useWindowSize()
    return(
        <div className="mt-20 newArrival">
            <div className="h-10"></div>
            <div className="flex flex-wrap mx-20">
                 <div >
                  <img src={logo} />
                  <div className='mt-12 text-sm text-gray-700'>123 Fifth Ave, New York, NY 12004.</div>
                  <div className='text-sm text-gray-700 mt-2'>+1 123 456 78 90</div>
                  <div className=' text-sm text-gray-700 mt-2'>mail@example.com</div>
                  <div className='flex mt-6'>
                      <BsFacebook  className='mx-2 color'/>
                      <BsTwitter className='mx-2 color'/>
                      <BsInstagram className='mx-2 color' />
                      <BsYoutube className='mx-2 color'/>
                  </div>
                 </div>
                 <div className={size.width>=600?'mx-12':'mt-2 mx-2'}>
                    <h1 className='bodyText font-bold '>Customer Service</h1>
                    <ul className='mt-8  text-sm text-gray-700'>
                        <li className='my-2'>Contact Us</li>
                        <li className='my-2'>Help & FAQs</li>
                        <li  className='my-2'>Payment Method</li>
                        <li  className='my-2'>Delivery Information</li>
                        <li  className='my-2'>Track Your Order</li>
                        <li  className='my-2'>Return & Exchanges</li>
                    </ul>
                 </div>
                 <div className={size.width>=600?'mx-12':'mt-2 mx-2'}>
                    <h1 className='bodyText font-bold '>Categories</h1>
                    <ul className='mt-8 text-sm text-gray-700'>
                        <li className='my-2'>Clothing & Fashion</li>
                        <li className='my-2'>Toys</li>
                        <li  className='my-2'>School Supplies</li>
                        <li  className='my-2'>Birthday Party Supplies</li>
                        <li  className='my-2'>Baby Diapering</li>
                    </ul>
                 </div>
                 <div className={size.width>=600?'mx-12':'mt-2 mx-2'}>
                    <h1 className='bodyText font-bold '>Our Company</h1>
                    <ul className='mt-8  text-sm text-gray-700'>
                        <li className='my-2'>Corporate Inforamtion</li>
                        <li className='my-2'>Privacy & Cookies Policy</li>
                        <li  className='my-2'>Terms & Condition</li>
                        <li  className='my-2'>Promo & Terms</li>
                    </ul>
                 </div>
            </div>
            <div className='h-10'></div>
        </div>
    )
}

export default Footer;