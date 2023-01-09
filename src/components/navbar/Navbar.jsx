import React from 'react'
import "./navbar.css" ;
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
          <div className="leftnavbar">
             <h3>Title</h3>
          </div>
          <div className="rightnavbar">
            <div>Home</div>
            <div>About</div>
            <div>Blog</div>
            <div>Contact</div>
            <div>
                <button className='signInBtn'>SIGNIN</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
