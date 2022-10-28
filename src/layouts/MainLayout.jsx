import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchDrawer from '../components/SearchDrawer'

export default function MainLayout() {
  return (
    <>
        <Header/>
        <SearchDrawer/>
        <Outlet/>
        <Footer/>
    </>
  )
}
