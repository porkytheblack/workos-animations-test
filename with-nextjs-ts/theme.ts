import {extendTheme} from "@chakra-ui/react"
import {createBreakpoints} from "@chakra-ui/theme-tools"


const breakpoints = createBreakpoints({
    base: "0px",
    xs: "340px",
    sm: "479px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
})

export const theme = extendTheme({
    breakpoints,
    initialColorMode: "dark"
})