import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <nav className="Navbar">
            <h3 className="SneakerHead
            ">SneakerHead</h3>
            <div className="buttons">
                <button>Sneakers</button>
                <button>Sale</button>
                <button>New Season</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar