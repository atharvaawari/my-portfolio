import { NavLink } from "react-router-dom"
import mylogo from "../assets/images/mylogo.png"

const Navbar = function() {
    return(
        <header className="header">
            {/* //w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md  */}
            <NavLink to="/" className="w-12 h-10 mt-2 rounded-lg bg-white items-center justify-center flex font-bold shadow-md " >
                <p className="blue-gradient_text">AA</p>
                {/* <img src={mylogo} alt="logo" /> */}
            </NavLink>
    
            <nav className="flex text-lg gap-5 font-medium  ">
                <NavLink to="/about" className={({isActive})=> isActive? 'text-blue-500': 'text-black hover:text-blue-400 py-1 px-4 rounded-2xl border' }>
                    About 
                </NavLink>
                <NavLink to="/Projects" className={({isActive})=> isActive? 'text-blue-500': 'text-black hover:text-blue-400  py-1 px-4 rounded-2xl border' }>
                    Projects
                </NavLink>
                <NavLink to="/Contact" className={({isActive})=> isActive? 'text-blue-500': 'text-black hover:text-blue-400 py-1 px-4 rounded-2xl border' }>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar