import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {lazy, Suspense} from "react"
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
const Room = lazy(() => import("./Pages/Room"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className='flex justify-center items-center h-screen bg-black'>
          <div className='w-10 h-10 rounded-full border-2 border-white border-t-transparent animate-spin' />
        </div>
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
