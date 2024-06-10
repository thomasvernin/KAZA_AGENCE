import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Router as Routes } from './routes/router'

/**
Initialise et rend l'application.
@returns {void}
*/
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Routes />
    </StrictMode>
)

