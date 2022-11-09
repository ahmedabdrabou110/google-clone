import React, { useState, useEffect } from 'react'
import Links from './components/Links'
import { useDebounce } from 'use-debounce'
import { useResultContext } from './contexts/ResultContextProvider'
const Search = () => {
  const [text, setText] = useState('')
  const { setSearchTerm } = useResultContext()
  const [debouncedValue] = useDebounce(text, 300)

  // useEffect(() => {
  //   if (debouncedValue) setSearchTerm(debouncedValue)
  // }, [debouncedValue])

  return (
    <div className=' sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <div className='flex relative'>
        <input
          type='text'
          value={text}
          className='sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
          placeholder='🔎 Search Google or type URL'
          onChange={(e) => setText(e.target.value)}
        />
        
        {text !== '' && (
          <button
            type='button'
            className='absolute top-1.5 right-4 text-2xl text-gray-500 '
            onClick={() => setText('')}
          >
            x
          </button>
        )}
        <button
          className='group relative ml-2  flex justify-center items-center mb-0 px-5  py-0 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-100 dark:bg-indigo-600 hover:dark:bg-indigo-700 '
          onClick={() => setSearchTerm(debouncedValue)}
        >
          🔎
        </button>
      </div>

      <Links />
    </div>
  )
}

export default Search
