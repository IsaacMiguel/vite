import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

if (process.env.NODE_ENV !== 'production') {
  // Not For Production
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000)
    // @ts-ignore for document.getElementById('root')
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  })
} else {
  // For Production
  // @ts-ignore for document.getElementById('root')
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
