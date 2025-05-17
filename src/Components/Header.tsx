import { NAV_LINKS } from "../Constants"

const Header = () => {
    return (
        <header>
            <nav className="w-full">
                <ul className="Flex_Around w-full">
                    {
                        NAV_LINKS.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="Nav_Link">{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header