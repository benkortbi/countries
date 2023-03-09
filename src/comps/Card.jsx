import { seperateThis } from '../fomatters/numberFormtter.js'
import { NavLink } from 'react-router-dom'
import { memo } from 'react'

const Card = memo(({title, capital, region, population, png}) => {
  return(
    <NavLink to={`/countries/${title}`}>
<div className="h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:bg-DarkBlue">
  <img loading='lazy' className="rounded-t-lg w-full h-1/2" src={png} alt="" />
    <div className="py-5 px-5">
    <h2 className='text-center font-extrabold text-base text-VeryDarkBlueL dark:text-White'>{title}</h2>
    <ul className='flex flex-col gap-3 mt-5'>
    <li className='font-semibold text-base text-VeryDarkBlueL dark:text-White'>Population: <span className='font-light dark:text-White'>{seperateThis(population)}</span></li>
    <li className='font-semibold text-base text-VeryDarkBlueL dark:text-White'>Region: <span className='font-light dark:text-White'>{region}</span></li>
    <li className='font-semibold text-base text-VeryDarkBlueL dark:text-White'>Capital: <span className='font-light dark:text-White'>{capital}</span></li>
    </ul>
    </div>
</div>
</NavLink>
    )
})
export default Card;