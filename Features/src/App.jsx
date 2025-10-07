import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ChipInput from './ChipInput/ChipInput'
import AuthApp from './AuthContextHook/AuthApp'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<ChipInput />} /> */}
          <Route path="/" element={<AuthApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
