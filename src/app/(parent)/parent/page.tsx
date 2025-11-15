"use client"
import React from 'react'
import SidebarComponent from '../../component/sidebar/parentSidebar'
import {BentoGridDemo} from '@/component/acertinity/WobbleCardTeacher'

const Home = () => {
  return (
    <SidebarComponent components={<div className='flex align-middle '><BentoGridDemo /></div>}/>
  )
}

export default Home