const NavBar = ()=>{
  return (
    <nav className="navbar">
        <div className="logo">
          <img src="brand_logo.png" alt="brand-logo" />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>
  )
}

export default NavBar;