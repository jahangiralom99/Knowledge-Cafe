import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <hr className='border ' />
      <div className='flex '>
        <Blogs />
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
