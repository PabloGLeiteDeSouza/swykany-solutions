"use client"
import useTheme from "../useTheme"

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"

export default function SwitchTheme() {

    const [theme, setTheme ] = useTheme();

    return(
        <>
            <button type="button" className="bottom-4 right-4 fixed rounded-[1rem] p-2 bg-purple-800 text-white" title="switch theme" onClick={() => { setTheme() }} >
                { theme == "dark" ? <BsSunFill/> : <BsMoonStarsFill/>}
            </button>
        </>
    )
}