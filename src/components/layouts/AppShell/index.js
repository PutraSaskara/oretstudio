import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'

function AppShell({children}) {
  return (
    <main>
        <NavBar/>
        {children}
        <Footer/>
    </main>
  )
}

export default AppShell