import React from 'react'
import SideBarLinks from './SideBarLinks'
import { FaSignsPost } from "react-icons/fa6";
import bg from "../images/bg.png"
function SideBar() {
  return (
    <div className='col-start-1 col-end-3 row-start-1 row-end-2 border-[1px] border-black grid grid-rows-10 grid-cols-1  '>
        <header className=' flex justify-center items-center px-3 bg-black  flex-col gap-3 border-[1px] border-black col-start-1 col-end-2 row-start-1 row-end-4'>
            <img src={bg} alt="" className='w-full h-full' />
        </header>
        <section className=' flex justify-center items-center px-3  flex-col gap-3 border-[1px] border-black col-start-1 col-end-2 row-start-4 row-end-9'>
            <SideBarLinks icon={<FaSignsPost/>} to="/" content="Posts"/>
            <SideBarLinks icon={<FaSignsPost/>} to="/" content="notificatoins"/>
            <SideBarLinks icon={<FaSignsPost/>} to="/" content="Chats"/>
            <SideBarLinks icon={<FaSignsPost/>} to="/" content="Profile"/>
        </section>
        <footer className=' flex justify-center items-center px-3  flex-col gap-3 border-[1px] border-black col-start-1 col-end-2 row-start-9 row-end-11'>
            <SideBarLinks icon={<FaSignsPost/>} to="/" content="Logout"/>
            <SideBarLinks icon={<FaSignsPost/>} to="/" content="settings"/>
        </footer>
    </div>
  )
}

export default SideBar