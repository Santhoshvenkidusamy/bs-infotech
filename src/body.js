import baby from './Images/baby-store-hero-baby-img.png';
import useWindowSize from './useWindowSize';
const Body = () =>{
    const size = useWindowSize()
 return(
    <div className={size.width >= 768 ?"flex flex-wrap mx-32 ":"mx-8"}>
       <div className={size.width>= 768 ?"mt-20 w-5/12":'mt-20'}>
           <div className="color font-bold text-sm"> FLAT  30%  OFF +  CASHBACK!  * </div>
           <h1 className="bodyText font-bold text-5xl mt-4">Baby Essential Fashion & Nursery</h1>
           <div className="text-gray-700 mt-4">Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis sit massa pellentesque mi quis elit elementum tristique urna.</div>
           <div className="mt-10 text-gray-700 ">* Enim cras quam et nullam risus nec tincidunt mattis nunc.</div>
           <div className='flex mt-12 '>
           <button className='background text-white font-bold border rounded-md p-2 '>SHOP NOW</button>
           <div className='ml-8'>
            <div className='color font-bold mt-2'>Use code: BEC30</div>
            {/* <div className='border-pink-400 border-dotted mt-4'></div> */}
           </div>
           </div>
        </div>
        <div className=''>
            <div className='bg-yellow-200 rounded-full ml-10'>
            <img src={baby} alt='image'/>
            </div>
        </div>
    </div>
 )
}
export default Body;