import type { ReactNode } from "react"
import { NavLink } from "react-router-dom"
interface NavLinkProps {
    content:string, 
    to :string, 
    icon :ReactNode
}
const  SideBarLinks:React.FC<NavLinkProps>=({content , to , icon }) =>{
  return (
    <NavLink to={to} className="flex justify-start items-center w-full gap-3 text-xl ">
        {icon}
        <p>{content}</p>
    </NavLink>
  )
}

export default SideBarLinks