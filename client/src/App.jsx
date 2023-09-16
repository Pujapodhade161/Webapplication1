import Explore from "./Components/Explore"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import User from "./Components/User"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/explore/:id" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
