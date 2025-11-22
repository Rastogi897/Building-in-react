import { BrowserRouter, Routes, Route, redirectDocument } from 'react-router-dom'
import Leaderboard from './Leaderboard/Leaderboard'
import Debounce from './Debouncing/debounce'
import Throttling from './Throttling/Throttling'
import ContextApp from './ContextAPI/ContextApp'

// import VirtualList from './VirtualList/VirtualList' 
// import TransferList from './TransferList/TransferList'
// import ChipInput from './ChipInput/ChipInput'
// import AuthApp from './AuthContextHook/AuthApp'
// import MovieDashboard from './MovieFilter_Bookmark/MovieDashboard'
// import Main from './Accordian/Main'
// import TicTacToe from './TicTacToe/TicTacToe'
// import OTP from './otpTabs/OTP'
// import Sidebar from './Sidebar/Sidebar'
// import ProgressBar from './ProgressBar/ProgressBar'

// --- TO BUILD ---
// undo redo

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContextApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
// RUN: npm run dev