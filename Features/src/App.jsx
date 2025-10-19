import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import ChipInput from './ChipInput/ChipInput'
// import AuthApp from './AuthContextHook/AuthApp'
// import MovieDashboard from './MovieFilter_Bookmark/MovieDashboard'
// import Main from './Accordian/Main'
// import TicTacToe from './TicTacToe/TicTacToe'
// import OTP from './otpTabs/OTP'
// import Sidebar from './Sidebar/Sidebar'
import ProgressBar from './ProgressBar/ProgressBar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProgressBar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
