import { BrowserRouter, Routes, Route, redirectDocument } from 'react-router-dom'
import VirtualList from './VirtualList/VirtualList'

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
          <Route path="/" element={<VirtualList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
