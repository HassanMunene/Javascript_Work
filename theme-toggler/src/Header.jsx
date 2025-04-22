import { useTheme } from "./ThemeContext";

const Header = () => {
    const { toggleTheme } = useTheme();
    return (
        <div>
            <button
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </div>
    )
}

export default Header;