import { useTheme } from "./ThemeContext"

const Main = () => {
    const { theme } = useTheme();

    return (
        <>
            {theme === 'light' ? (
                <div style={{ backgroundColor: 'white' }}>
                    <div>Main content section</div>
                </div>
            ) : (
                <div style={{ backgroundColor: 'black' }}>
                    <div>Main content section</div>
                </div>
            )}
        </>
    )
}

export default Main