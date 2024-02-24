import React, {useState}from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
// import {UseState} from 'react' 

function Nav() {
  const[icon, setIcon] = useState(false)
  const handleClick = () =>{
    setIcon(!icon)
  }
  const closeSideDraWer = () =>{
    setIcon(false)
  }


  return (
    <>
    <nav className='navbar'>
      

    <Link to ='/' className='navlogo' onClick={closeSideDraWer}><img src="kkk/kkk.png" alt="Logo" /></Link>
     
        
        <div className="menu-icon" onClick={handleClick}>
              {
                icon ? <FaTimes className='Fa-times'></FaTimes>:
                 <FaBars className='Fa-bars'></FaBars>
              }
        </div>
          
        <ul className={ icon ? 'nav-menu active':'nav-menu'} >

       <li>
            <Link to='/' className='nav-links' onClick={closeSideDraWer}>Home
            </Link>
       </li> 

        <li>
            <Link to='/about' className='nav-links' onClick={closeSideDraWer}>About
            </Link>
          </li>

        <li>
            <Link to='/products' className='nav-links' onClick={closeSideDraWer}>Products
            </Link>
        </li>

        <li>
            <Link to='/service' className='nav-links' onClick={closeSideDraWer}>Services
            </Link>
        </li>

        <li>
            <Link to='/contact' className='nav-links' onClick={closeSideDraWer}>Contact
            </Link>
        </li>

       </ul>
       
    </nav>
 </>
  )
}

export default Nav