import React from 'react'
import Head from 'next/head'

import Nav from '../component/nav/nav.js'
import Sidebar from '../component/sidebar/sidebar.js'


import Content from '../component/content/content.js'

const App = () => (
  <div className="App">
    <Head>
      <title>new style</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
    </Head>
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
        font-family: 'Open Sans', sans-serif;
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
