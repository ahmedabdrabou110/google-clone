import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const InputSearch = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/search')
  }, [])
  return <div></div>
}
