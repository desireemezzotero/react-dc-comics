const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="img">
            <img className="image" src="/favicon.ico" alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#">CHARACTERS</a>
            </li>
            <li>
              <a className="text-primary" href="#">COMICS</a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">GAMES</a>
            </li>
            <li>
              <a href="#">COLLECTIBLES</a>
            </li>
            <li>
              <a href="#">VIDEOS</a>
            </li>
            <li>
              <a href="#">FANS</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </nav>
      </div> {/* div del container */}
    </header>
  )
}

export default Header