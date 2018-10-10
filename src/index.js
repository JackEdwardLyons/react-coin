import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/common/Header'
import List from './components/list/List'

import './index.css'

const App = () => {
  return (
    <div>
      <Header />
      <List />
      <h1>Hello World</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))