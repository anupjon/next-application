
const menus = ["Home","About","Contact"]

const Header = ({logo}) =>{
    return(
        <header>
            <div className="logo">{logo}</div>
            <nav>
                <ul>
                    {
                        menus.map((menu,index)=>(
                            <li key={index}>{menu}</li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;