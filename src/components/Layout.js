import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <nav className="navbar navbar-expand-sm bg-info navbar-dark">
        <div className="container-fluid">

          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

      
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
     
            <li className="nav-item">
              <Link to="/products" className="nav-link">Produts</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-product" className="nav-link">Add Produt</Link>
            </li>

            <li className="nav-item">
              <Link to="/demo" className="nav-link">Demo</Link>
            </li>

          </ul>
        </div>
      </nav>

      <Outlet />

    </>
  )
};

export default Layout;