
import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header className="logo">
        <div>
        <div class="LOGO">
          <p className ="word" > THE </p>
          <h1 >Library</h1>
        </div> 
         <p>biggest library</p>
       </div>
        <nav>
          <div className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/authers">Authers</Link></li>
            <li><Link to="/Booklist">Booklist</Link></li>
            <li><Link to="/authersName">authersName</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/OurBooks">Our Books</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
           
            

          </div>
        </nav>
      </header>

    </div>
  )
}

export default Navbar
