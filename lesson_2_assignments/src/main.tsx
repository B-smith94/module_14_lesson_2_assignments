import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApolloProvider from './Providers/ApolloProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MyApolloProvider>
        <App />        
      </MyApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
