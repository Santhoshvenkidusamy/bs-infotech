import card1 from './Images/Screenshot 2023-10-25 190659.png';
import card2 from './Images/Screenshot 2023-10-25 190741.png';
import card3 from './Images/Screenshot 2023-10-25 190755.png';
const Cards = () =>{
    return(
        <div className="flex flex-wrap mx-20 mt-10">
        <div className='mx-6 w-96 h-96'>
            <img  className='rounded-lg' src={card1} alt='image'/>
        </div>
        <div className='mx-6 w-96 h-96'>
            <img  className='rounded-lg' src={card2} alt='image'/>
        </div>
        <div className='mx-6 w-96 h-96'>
            <img className='rounded-lg'  src={card3} alt='image'/>
        </div>
        </div>
    )
}

export default Cards;