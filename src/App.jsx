import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {lazy, Suspense} from "react"
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
const Room = lazy(() => import("./Pages/Room"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className='border border-black w-8 h-8 rounded-full border-t-transparent' />
      }>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/room/:roomID" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
