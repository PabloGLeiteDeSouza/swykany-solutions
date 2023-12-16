import useTheme from "../useTheme"

export default function SwitchTheme() {

    const [theme, setTheme ] = useTheme();

    return(
        <>
            <button className="bottom-4 right-4 fixed rounded-[1rem] bg-purple-950 text-white" title="switch theme" onClick={() => { setTheme() }} >
                
            </button>
        </>
    )
}