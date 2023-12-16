"use client"

import Theme from "@/components/Theme"

export default function Providers({children}: {children: React.ReactNode}) {
    return(
        <>
            <Theme DefaultTheme="auto" >
                {children}
            </Theme>
        </>
    )
}