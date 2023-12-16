"use client"

import { useContext, useEffect, useState } from "react";
import useTheme from "../useTheme";
import { Theme } from "daisyui";
import { ThemeLoaderProps } from "../types";
import Image from "next/image";

export default function ThemeLoader ( { DefaultTheme, LoadingScreenComponent, children } : ThemeLoaderProps ) {

    const [ theme, setTheme ] = useTheme();

    const [isLoading, setIsLoading ] = useState<boolean>(true);

    useEffect(() => {
        if (window && localStorage) {
            const Tema = localStorage.getItem("data-theme");
            if (Tema != null && (Tema as Theme) === Tema) {
                setTheme(Tema);
            } else {
                if (DefaultTheme) {
                    if (DefaultTheme == "auto") {
                        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                            setTheme("dark");
                        } else {
                            setTheme("light");
                        }
                    } else {
                        setTheme(DefaultTheme);
                    }
                } else {
                    setTheme("light");
                }
            }
        }
        setIsLoading(!isLoading);
    }, [DefaultTheme, setIsLoading, setTheme, isLoading])
    

    if (isLoading) {
       if (LoadingScreenComponent) {
            return(
                <>
                    {LoadingScreenComponent}
                </>
            )
        } else {
            return (
                <>
                    <div className="w-full h-screen flex items-center justify-center" >
                        <Image 
                            width={25} 
                            height={25} 
                            alt="logo swykany solutions" 
                            src="/Imgs/logo.png" 
                            className="w-[50px] h-[50px] rounded-[25%] animate-spin" 
                        />
                    </div>
                </>
            )
        }
    }

    return(
        <>
            {children}
        </>
    )
}
