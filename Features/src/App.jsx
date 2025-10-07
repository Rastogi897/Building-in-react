import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ChipInput from './ChipInput/ChipInput'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChipInput />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
