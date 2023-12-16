"use client"
import { useContext, createContext, useEffect, useState } from "react";
import { ThemeProviderProps, ThemeTypeBase } from "./types";
import useTheme from "./useTheme";
import { Theme as ThemeType } from "daisyui";
import Image from "next/image";
import ThemeLoader from "./ThemeLoader";



export default function ThemeProvider({ DefaultTheme, LoadingScreenComponent, children }: ThemeProviderProps) {
    
    return(
        <ThemeLoader 
            DefaultTheme={DefaultTheme} 
            LoadingScreenComponent={LoadingScreenComponent}
        >
            {children}
        </ThemeLoader>
    )

}