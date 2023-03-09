import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { convertCountryAbbreviationToName } from '../fomatters/countryFormatter.js'
import { seperateThis } from '../fomatters/numberFormtter.js'
import { iso2 } from '../fomatters/iso2code.js'

const Country = () => {
  const [country, setCountry] = useState(null)
  const turnCountry = iso2;
  
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const fetchId = async () => {
      let res = await fetch('http://localhost:5000/posts')
      let resJson = await res.json()
      const lookForCountry = resJson.find(item => item.name === id)
      setCountry(lookForCountry)
    }
    fetchId()
    return () => {
    fetchId()
    setCountry(null || '')
    }
  },[])
  
  return(
    <>
    {country ? <div className='container mx-auto px-2 py-5 relative'>
    <div className='relative mt-3 mx-auto px-4 overflow-hidden'>
        <button onClick={() => navigate(-1)} className='mb-5 flex items-center gap-2 px-2 rounded bg-VeryLightGray text-VeryDarkBlueL text-base font-semibold border shadow-sm dark:bg-DarkBlue dark:text-White dark:border-gray-600'>
    <AiOutlineArrowLeft size='1.2rem' />
    back
    </button>
    <img loading='lazy' className='w-full bg-cover h-[200px] mx-auto md:h-[400px] lg:h-[450px]' src={country?.flags?.png} alt='...' />
       <h1 className='text-base font-extrabold text-VeryDarkBlue mt-8'>{country?.name}</h1>
       <div className='md:flex md:justify-between'>
     <ul className='flex flex-col gap-3 mt-5'>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Native name: <span className='font-light dark:text-White'>{country?.nativeName}</span></li>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Population: <span className='font-light dark:text-White'>{seperateThis(country?.population)}</span></li>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Region: <span className='font-light dark:text-White'>{country?.region}</span></li>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Sub region: <span className='font-light dark:text-White'>{country?.subregion}</span></li>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Capital: <span className='font-light dark:text-White'>{country.capital}</span></li>
    </ul>
    
    <ul className='flex flex-col gap-3 mt-8'>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Top Level Domain: <span className='font-light dark:text-White'>{country?.topLevelDomain}</span></li>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Currencies: <span className='font-light dark:text-White'>{country?.currencies?.map(curr => `${curr.name}, `)}</span></li>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Languages: <span className='font-light dark:text-White'>{country?.languages?.map((lang, ind)=> `${lang.name}, `)}</span></li>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Sub region: <span className='font-light dark:text-White'>{country.subregion}</span></li>
    <li className='font-semibold text-sm text-VeryDarkBlueL dark:text-White'>Capital: <span className='font-light dark:text-White'>{country?.capital}</span></li>
    </ul>
    </div>
    <div className='flex flex-col gap-2 relative w-full mt-8'>
    <span className='text-base text-VeryDarkBlueL font-extrabold dark:text-White'>Border countries:</span>
    <ul className='flex flex-wrap gap-x-3'>
    {country && country?.borders?.map((el, ind) => {
    return <li className='mt-1 px-1 bg-VeryLightGray text-VeryDarkBlueL text-sm border shadow-sm dark:bg-DarkBlue dark:text-White dark:border-gray-600' key={ind}>{convertCountryAbbreviationToName(turnCountry[el])}</li>
    })}
    </ul>
    </div>
    </div>
    
    </div> : <div className='container mx-auto px-2 py-5 relative'>
    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
</div>}
    </>
    )
}
export default Country