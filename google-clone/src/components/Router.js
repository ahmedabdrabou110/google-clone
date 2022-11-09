import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { InputSearch } from '../InputSearch'
import Search from '../Search'
import Results from './Results'
const Router = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route exact path='/' element={<InputSearch />} />
        <Route path='/search' element={<Results />} />
        <Route path='/images' element={<Results />} />
        <Route path='/videos' element={<Results />} />
        <Route path='/news' element={<Results />} />
      </Routes>
    </div>
  )
}

export default Router
