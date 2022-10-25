import React, { Children } from 'react'

export default function Button({children}) {
  return (
    <button className="btn btn-sm btn-dark" type="submit">
        {children}
    </button>
  )
}
