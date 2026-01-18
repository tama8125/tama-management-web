import { useState } from 'react'
import Layout from '@/layout/layout'
import { RouteProvider } from '@/context/route-provider'

function App() {
  return (
    <RouteProvider>
      <Layout />
    </RouteProvider>
  )
}

export default App
