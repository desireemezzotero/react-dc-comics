const Header = (props) => {
  const menuHeader = props.menu

  return (
    <header>
      <div className="container">
        <nav>
          <div className="img">
            <img className="image" src="/favicon.ico" alt="logo" />
          </div>
          <ul>
            {menuHeader.map(item => (
              <li key={item.id}>
                <a href={item.url}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div> {/* div del container */}
    </header>
  )
}

export default Header