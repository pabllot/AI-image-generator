import React from 'react'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import CreatePost from './pages/CreatePost/CreatePost'
import Home from './pages/Home/Home'

import {logo} from './assets'
import { Header, Image } from './styles'

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Link to="/">
          <Image src={logo} alt='logo' />
        </Link>
      </Header>
    </BrowserRouter>
  )
}

export default App