import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useResultContext } from '../contexts/ResultContextProvider'
import Loading from './Loading'
import { useLocation } from 'react-router-dom'
import Search from '../Search'
const Results = () => {
  const { isLoading, searchTerm, results, getResults } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname == '/videos') {
        getResults(`/search/q=${searchTerm} videos`)
      } else {
        getResults(`${location.pathname}/q=${searchTerm}`)
      }
    }
  }, [location.pathname, searchTerm])
  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {!searchTerm ? (
            <div className='text-gray-900'>Search About someThing</div>
          ) : (
            results?.map(({ link, title, description }, index) => (
              <div className='md:w-3/5 w-full' key={index}>
                <a href={link} target='_blank' rel='noreferrer'>
                  <p className='text-sm'>
                    {link.length > 30 ? link.substring(0, 30) : link}
                  </p>
                  <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                    {title}
                  </p>
                </a>
                <p className='text-gray-500'>{description}</p>
              </div>
            ))
          )}
        </div>
      )

    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.map(({ image, link: { href, title } }, index) => (
            <div className='w-45 mr-5 h-70' key={index}>
              <a
                href={href}
                key={index}
                target='_blank'
                rel='noreferrer'
                className='sm:p-3 p-5 '
              >
                <img
                  className='w-40 mr-5 h-55'
                  src={image?.src}
                  alt={title}
                  loading='lazy'
                />
                <p className='w-36 break-words text-sm mt-2'>{title}</p>
              </a>
            </div>
          ))}
        </div>
      )

    case '/news':
      return (
        <div className='flex flex-wrap justify-between pace-y-6 sm:px-56 items-center'>
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className='md:w-2/5 w-full'>
              <a
                href={links?.[0].href}
                target='_blank'
                rel='noreferrer'
                className='hover:underline'
              >
                <p className='text-lg dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
                <div className='flex gap-4'>
                  <a href={source?.href} className='hover:underline'>
                    {source?.href}
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      )

    case '/videos':
      return (
        <div className='flex flex-wrap '>
          {results?.map((video, index) => (
            <div key={index} className='p-2'>
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width='450px'
                  height='200px'
                />
              )}
            </div>
          ))}
        </div>
      )
    default:
      return 'ERROR!'
  }
}

export default Results
