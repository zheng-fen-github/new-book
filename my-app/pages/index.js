import React from 'react'
import Nav from '../component/nav/nav.js'
import Sidebar from '../component/sidebar/sidebar.js'
import Content from '../component/content/content.js'

const App = () => (
  <div className="App">
    <Nav/>
    <div className="container">
      <Sidebar/>
      <Content/>
    </div>
    <style jsx global>{`
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }
      .App {
        height:100vh;
        width:100vw;
        overflow:hidden;
      }
      .container {
        height:92%;
        width:100%;
        display:flex;
      }
    `}
    </style>
  </div>
)

export default App
