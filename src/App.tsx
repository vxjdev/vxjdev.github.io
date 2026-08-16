import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageShell from './layouts/PageShell'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Partners from './pages/Partners'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageShell />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="partners" element={<Partners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
