import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetail from './pages/ClubDetail.tsx'
import ClubPage from './pages/ClubPages.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path='/products' element={<ClubPage />}></Route>
        <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  </Router>,
  </React.StrictMode>,
)
