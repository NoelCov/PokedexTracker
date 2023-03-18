import "./navbar.styles.css";

export const Navbar = (): JSX.Element => {
    return (
        <nav className="navbar">
            <h1>Pokedex tracker</h1>
            <div className="hamburgerMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};
