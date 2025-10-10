import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ChipInput from './ChipInput/ChipInput'
import AuthApp from './AuthContextHook/AuthApp'
import MovieDashboard from './MovieFilter_Bookmark/MovieDashboard'
import Main from './Accordian/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
