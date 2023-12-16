import { Theme } from "daisyui";

export type ThemeTypeBase = "auto" | Theme;

export type useThemeReturnType = [theme: Theme, SetTheme: (Theme?: Theme | undefined) => void];


// Export Interfaces from Components this ThemeComponent

export interface ThemeProviderProps {
    DefaultTheme?: ThemeTypeBase;
    LoadingScreenComponent?: React.ReactNode;
    children?: React.ReactNode;
}

export interface ThemeContextProps {
    theme: Theme
    setTheme: (Theme?: Theme | undefined) => void
    DefaultTheme: ThemeTypeBase
}

export interface ThemeLoaderProps {
    DefaultTheme?: ThemeTypeBase
    LoadingScreenComponent?: React.ReactNode
    children: React.ReactNode
}