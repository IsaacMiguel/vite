import React from 'react'

import { users } from './data'

function App() {
  return (
    <>
      {
        users.map(u => <p>{u.name}</p>)
      }
    </>
  )
}

export default App
