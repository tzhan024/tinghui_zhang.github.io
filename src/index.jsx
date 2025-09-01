import { Routes, Route, BrowserRouter } from 'react-router-dom'

function Home() {
  return <h2>Home Page</h2>
}

function About() {
  return <h2>About Page</h2>
}

function Projects() {
  return (
    <div>
      <h2>Projects Page</h2>
      <p>Here you can show your research, coding projects, etc.</p>
    </div>
  )
}

function Contact() {
  return <h2>Contact Page</h2>
}

export default function Index() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
