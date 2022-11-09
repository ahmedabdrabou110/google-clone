import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { url: '/search', text: '🔎 All', id: 1 },
  { url: '/news', text: '📰 News', id: 2 },
  { url: '/images', text: '📸 Images', id: 3 },
  { url: '/videos', text: '📺 Videos', id: 4 },
]

const Links = () => {
  return (
    <div className='ml-auto flex sm:justify-start justify-center items-center mt-4'>
      {links.map(({ url, text, id }) => (
        <NavLink
          key={id}
          to={url}
          className='text-blue-700 dark:text-blue-300 mr-3'
          style={{}}
        >
          {text}
        </NavLink>
      ))}
    </div>
  )
}

export default Links
