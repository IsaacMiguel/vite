import React from "react"

import { users } from "./data"

function App() {
  return (
    <>
      <h1>hi!</h1>
      {users.map((u) => (
        <p key={u.id}>
          name: {u.name}, age: {u.age}
        </p>
      ))}
    </>
  )
}

export default App
