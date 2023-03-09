import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react'

const DATA = createContext()


const DataProvider = ({
  children
}) => {
  const [allData,
    setData] = useState([])
  const [searchQuery,
    setSearchQuery] = useState('')
  const [regionQuery,
    setRegionQuery] = useState('')
  const [filteredData,
    setFilteredData] = useState([])
  const [dataSaver,
    setDataSaver] = useState([])
  const [isLoading,
    setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('http://localhost:5000/posts')
        const jsonFormatData = await res.json()
        setData(jsonFormatData)
        setDataSaver(jsonFormatData)
        setLoading(false)
      }catch(err) {
        setLoading(true)
      }
    }
    getData()

  }, [])

  return (
    <DATA.Provider value={ { allData, setData, isLoading, searchQuery, setSearchQuery, dataSaver, setDataSaver, regionQuery, setRegionQuery }}>
      {children}
    </DATA.Provider>
  )
}

export default DataProvider
  export const useData = () => useContext(DATA)