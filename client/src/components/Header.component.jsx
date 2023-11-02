function Header() {
  return (
    <nav className="bg-dark p-1">
      <div className="container d-flex w-100">
        <h1 className="text-light">Autos</h1>
        <div className="container-nav">
          <ul className="navbar-nav d-flex justify-content-evenly gap-5">
            <li className="navbar-nav">
              <a href="#">Autos</a>
            </li>
            <li>
              <a href="#">Citas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
