import { useState } from "react";
import Link from "../Link/Link";
import { IoMenuOutline } from 'react-icons/io5';
import { IoClose } from "react-icons/io5";


  

const NavBar = () => {
    const [open,setOpen]= useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Kawaii Group' },
        { id: 3, path: '/business-verticles', name: 'Business Verticles' },
        { id: 4, path: '/investor-relations', name: 'Investor Relations' },
        { id: 5, path: '/sustainability', name: 'Sustainability' },
        { id: 6, path: '/careers-at-kawaii', name: 'Careers at Kawaii' },
        { id: 7, path: '/media-center', name: 'Media Center' },
        { id: 8, path: '/contacts', name: 'Contacts' },
        { id: 9, path: '*', name: 'NotFound' }
      ];
    return (
        <nav className="text-black bg-blue-300 p-6">
            <div className="md:hidden text-3xl" onClick={()=>setOpen(!open)}>
                {
                    open === true? <IoClose></IoClose> : 
                    <IoMenuOutline></IoMenuOutline>
                }
            
            </div>
<ul className={`md:flex duration-1000 absolute md:static
${open? 'top-16':'-top-60'}
bg-blue-300 px-6`}>
{
    routes.map(route =><Link key={route.id} route={route}></Link>)
} 
</ul>
        </nav>
    );
};

export default NavBar;