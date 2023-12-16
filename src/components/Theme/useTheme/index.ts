"use client"

import React from "react"
import { Theme } from "daisyui";
import { useThemeReturnType } from "../types";

export default function useTheme() : useThemeReturnType {

    const [theme, setTheme] = React.useState<Theme>("light");

    function SetTheme(Theme?: Theme) {
        if(localStorage && document){
            if (Theme) {
                setTheme(Theme);
                localStorage.setItem("data-theme", Theme);
                document.documentElement.setAttribute("data-theme", Theme);
            } else {
                const ThemeSet = (theme == "dark") ? "light" : "dark";
                setTheme(ThemeSet);
                localStorage.setItem("data-theme", ThemeSet);
                document.documentElement.setAttribute("data-theme", ThemeSet);
            }
        }
    }
    return [theme, SetTheme];
}