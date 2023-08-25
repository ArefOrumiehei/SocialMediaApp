import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

//Components
import App from './App.jsx'

//Context
import DarkModeProvider from './context/DarkModeProvider'

//Style
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </BrowserRouter>,
)
