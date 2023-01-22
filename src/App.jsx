import React from 'react'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import CreatePost from './pages/CreatePost/CreatePost'
import Home from './pages/Home/Home'

import {logo} from './assets'
import { ButtonLink, Header, Image } from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Link to="/">
          <Image src={logo} alt='logo' />
        </Link>
        <Link to="/create-post" style={{textDecoration: 'none', fontWeight: '500', background: '#6469ff', color: 'white', borderRadius: '6px', padding: '1rem 1rem'}}>
          Create
        </Link>
      </Header>
    </BrowserRouter>
  )
}

export default App