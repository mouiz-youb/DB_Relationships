import SideBarLinks from './SideBarLinks'
import { IoIosSend } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
function SideBar() {
  return (
    <div className='col-start-1 col-end-3 row-start-1 row-end-2 border-[1px] border-black grid grid-rows-10 grid-cols-1  '>
        <header className=' flex justify-center items-center px-3  flex-col gap-3 border-[1px] border-black col-start-1 col-end-2 row-start-1 row-end-3'>
            Logo
        </header>
        <section className=' flex justify-evenly items-center px-3  flex-col gap-3 border-[1px] border-black col-start-1 col-end-2 row-start-3 row-end-7'>
            <SideBarLinks icon={<IoIosSend/>} to="/" content="Posts"/>
            <SideBarLinks icon={<IoIosNotifications/>} to="/" content="notificatoins"/>
            <SideBarLinks icon={<IoChatbubbleEllipses/>} to="/" content="Chats"/>
            <SideBarLinks icon={<CgProfile/>} to="/" content="Profile"/>
        </section>
        <footer className=' flex justify-center items-center px-3  flex-col gap-3 border-[1px] border-black col-start-1 col-end-2 row-start-7 row-end-9 gap-5 '>
            <SideBarLinks icon={<IoLogOut/>} to="/" content="Logout"/>
            <SideBarLinks icon={<IoSettings/>} to="/" content="settings"/>
        </footer>
    </div>
  )
}

export default SideBar