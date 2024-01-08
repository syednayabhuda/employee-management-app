import './App.css'
import ListEmployees from './components/ListEmployees'
import Header from './components/Header'
import Footer from './components/Footer'
import Employee from './components/Employee'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployees />}></Route>
          <Route path='/employees' element={<ListEmployees />}></Route>
          <Route path='/add-employee' element={<Employee />}></Route>
          <Route path='/update-employee/:id' element={<Employee />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
