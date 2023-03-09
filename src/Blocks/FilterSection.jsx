import {
  useState
} from 'react'
import {
  AiOutlineSearch
} from 'react-icons/ai'
import {
  useData
} from '../context/data'

const FilterSection = () => {
  const {
    setSearchQuery,
    searchQuery,
    setDataSaver,
    dataSaver,
    setData,
    regionQuery,
    setRegionQuery
  } = useData()

  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchQuery(snapshot => query);

    if (query === '') {
      setData(snapData => dataSaver);
    } else {
      const filteration = dataSaver.filter(item => item.name.toLowerCase().includes(query))
      setData(snapData => filteration);
    }
  }

  const handleSelection = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setRegionQuery(snapRegion => query);

    if (query === '') {
      setData(snapData => dataSaver);
    } else {
      const filteration = dataSaver.filter(item => item.region.toLowerCase().includes(query))
      setData(snapData => filteration);
    }
  }
  return(
    <>
    <div className='container mx-auto px-2'>
      <form className='py-5'>
 <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-White dark:bg-DarkBlue">Search</label>
 <div className="relative">
 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<AiOutlineSearch className='dark:fill-White' />
      </div>
<input onChange={(e) => handleSearch(e)} value={searchQuery} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-DarkGray border border-gray-300 rounded-lg bg-gray-50 focus:ring-VeryDarkBlueL focus:border-VeryDarkBlueL dark:bg-DarkBlue dark:border-gray-600 dark:placeholder-White dark:text-White dark:focus:ring-White dark:focus:border-White" placeholder="Search for county" required />
      </div>
    </form>

    <select onChange={handleSelection} value={regionQuery} id="countries" className="py-4 text-DarkGray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-VeryDarkBlueL focus:border-VeryDarkBlueL block w-full p-2.5 dark:bg-DarkBlue dark:border-gray-600 dark:placeholder-DarkBlue dark:text-White dark:focus:ring-White dark:focus:border-White">
 <option value="">All region</option>
 <option value="Africa">Africa</option>
 <option value="America">America</option>
 <option value="Asia">Asia</option>
 <option value="Europe">Europe</option>
 <option value="Oceania">Oceania</option>
    </select>
  </div> < />
)
}
export default FilterSection;