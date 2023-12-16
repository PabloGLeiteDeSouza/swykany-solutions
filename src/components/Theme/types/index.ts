import { Theme } from "daisyui";

export type ThemeTypeBase = "auto" | Theme;

export interface ThemeProps {
    DefaultTheme?: ThemeTypeBase;
    LoadingScreenComponent?: React.ReactNode;
    children?: React.ReactNode;
}

export type useThemeReturnType = [theme: Theme, SetTheme: (Theme?: Theme | undefined) => void];