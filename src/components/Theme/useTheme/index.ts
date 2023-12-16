"use client"

import React, { useEffect } from "react"
import { Theme } from "daisyui";
import { useThemeReturnType } from "../types";

export default function useTheme() : useThemeReturnType {

    const [theme, setTheme] = React.useState<Theme>("light");

    useEffect(() => {
        if (localStorage) {
            const local_theme = localStorage.getItem("data-theme");
            if (local_theme != null && (local_theme as Theme) === local_theme ) {
                setTheme(local_theme);
            }
        }
    }, [setTheme]);

    function SetTheme(Theme?: Theme) {
        if(localStorage && document){
            if (Theme) {
                setTheme(Theme);
                localStorage.setItem("data-theme", Theme);
                document.documentElement.setAttribute("data-theme", Theme);
                return;
            }

            const ThemeSet = (theme == "dark") ? "light" : "dark";
            setTheme(ThemeSet);
            localStorage.setItem("data-theme", ThemeSet);
            document.documentElement.setAttribute("data-theme", ThemeSet);
        }
    }
    return [theme, SetTheme];
}