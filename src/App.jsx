import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {lazy, Suspense} from "react"
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
const Room = lazy(() => import("./Pages/Room"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className='flex justify-center items-center py-50 border-2 border-black w-10 h-10 rounded-full border-t-transparent animate-spin' />
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
