import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  
  return <>
  
  
  <div className="home-navbar p-2">
  <nav className="navbar  navbar-expand-lg ">
  <div className=" container">
 
    <NavLink to={''} className="navbar-brand  text-light fw-bold h2" ><h1>Start Framework</h1></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto fw-bold">
      <li className="nav-item  ">
        <NavLink to={'project1React/about'} className="nav-link active  text-light px-4" aria-current="page" href="#">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={'project1React/portfolio'} className="nav-link active  text-light px-4" aria-current="page" href="#">Portfolio</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={'project1React/contact'} className="nav-link active  text-light px-4" aria-current="page" href="#">Contact</NavLink>
      </li>
    
    </ul>
  
    </div>
  </div>
</nav>
  
  
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    //return <>
    
//<div className='bg-dark '>
//<div className="container  ">


//<div className="d-flex justify-content-between align-items-center m-3 ">
//<Link className='text-decoration-none' to={''}><h1>Start Framework</h1></Link>
//<div >
    //<Link className='px-3 text-decoration-none' to={'about'}>About</Link>
    //<Link className='px-3 text-decoration-none '  to={'portfolio'}>Portfolio</Link>
    //<Link className='px-3 text-decoration-none'  to={'contact'}>Contact</Link>
   
//</div>




//</div>


//</div>
//</div>







    
}
