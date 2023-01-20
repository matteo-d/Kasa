import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Lodging } from "./pages/Lodging"
import { About } from "./pages/About"
import { Error } from "./pages/Error"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lodging" element={<Lodging />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<Error />} />
    </Routes>
   )
}
export default App
