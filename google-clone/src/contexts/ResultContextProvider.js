import { createContext, useState, useContext } from 'react'
const ResultContext = createContext()
const URLBase = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('Elon Musk')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getResults = async (type) => {
    setIsLoading(true)
    const response = await fetch(`${URLBase}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'EU',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    })
    const data = await response.json()
    if (type.includes('/news')) {
      setResults(data.entries)
    } else if (type.includes('/images')) {
      setResults(data.image_results)
    } else {
      setResults(data.results)
    }
    // setResults(data)

    setIsLoading(false)
  }
  return (
    <ResultContext.Provider
      value={{ getResults, isLoading, searchTerm, setSearchTerm, results }}
    >
      {children}
    </ResultContext.Provider>
  )
}
export const useResultContext = () => useContext(ResultContext)
