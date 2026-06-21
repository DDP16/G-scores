import React from 'react'

export default function Card({children, className = "", onClick}) {
  return (
    <div className={`rounded-xl shadow-md border border-gray-100 ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
