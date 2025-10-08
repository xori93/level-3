import './App.css'
import Header from './components/header'
import Landing from './components/landing'
import Navbar from './components/navbar'


function App() {

  return (
    <>
      <Navbar />
      <div className='flex flex-row gap-6 my-24'>
      <Header />
      <Landing />
      </div>
    </>
  )
}

export default App
