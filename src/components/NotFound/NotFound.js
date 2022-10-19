import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2 style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'crimson'
      }}>
        <span style={{fontSize: '10rem'}}>404 </span>
        Sorry, page not found!
      </h2>
    </div>
  )
}

export default NotFound