import React from "react"

import { users } from "./data"

function App() {
  return (
    <>
      <h1>Probando github actions!!!</h1>
      {users.map((u) => (
        <p>
          {u.name}, edad: {u.age}
        </p>
      ))}
    </>
  )
}

export default App
