import React from 'react'

import Graph1 from './Graph1'
import Graph2 from './Graph2'
import PlayerTotal from './PlayerTotal'

function App () {
  return (
    <>
      <header className="header">
        <h1>Share Shares</h1>
      </header>
      <section className="main">
        <Graph1/>
        <Graph2/>
        <PlayerTotal/>
      </section>
    </>
  )
}

export default App
