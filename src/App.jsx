import React from 'react'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import CreatePost from './pages/CreatePost/CreatePost'

import newlogo from './assets/newlogo.png'
import { Header, Image, Main } from './styles'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Link to="/">
          <Image src={newlogo} alt='logo' />
        </Link>
        <Link to="/create-post" style={{textDecoration: 'none', fontWeight: '500', background: '#6469ff', color: 'white', borderRadius: '6px', padding: '1rem 1rem'}}>
          Create
        </Link>
      </Header>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App