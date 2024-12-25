import React from 'react'
import Nav from './Components/Nav'
import Notes from './Components/Notes'
import ContextProvider from './Context/index.jsx'
import Btn from './Components/Btn.jsx'
import AddNote from './Components/AddNote.jsx'
const App = () => {

  return (
    <ContextProvider>
      <Nav />
      <Notes />
      <Btn/>
      <AddNote/>
    </ContextProvider>
  )
}

export default App