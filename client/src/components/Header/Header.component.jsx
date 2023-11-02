import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='d-flex p-1 bg-dark'>
      <div className="container d-flex">
        <h1 className="text-light">Autos</h1>
        <nav className="navbar w-100 d-flex justify-content-end">
          <ul className="navbar-nav d-flex flex-row gap-5">
            <li className="nav-item">
              <NavLink to={'/autos'} className="nav-link text-light fs-4" >Autos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/servicios'} className="nav-link text-light fs-4" >Servicios</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
