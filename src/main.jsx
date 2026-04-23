import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' // Import the Provider component from react-redux to make the Redux store available to the app
import store from './store.js' // Import the Redux store that we created in store.js to provide it to the app through the Provider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap the App component with the Provider component and pass the store as a prop to make the Redux store 
                              available to all components in the app */}
    <App />
    </Provider>
  </React.StrictMode>,
)
