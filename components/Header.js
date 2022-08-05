
const menus = ["Home","About","Contact"]

const Header = ({logo}) =>{
    return(
        <header>
            <div className="logo">{logo}</div>
            <nav>
                <ul>
                    {
                        menus.map(menu=>(
                            <li>{menu}</li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;