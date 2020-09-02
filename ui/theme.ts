import baseStyled, { createGlobalStyle } from 'styled-components'
import type { ThemedStyledInterface } from 'styled-components'

export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    info: '#17a2b8',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',

    text: '#343a40',
  },
  fontSizes: {
    tiny: '.2rem',
    small: '.5rem',
    normal: '1rem',
    big: '2rem',
    mega: '5rem',
  },
  breakpoints: {
    xs: 1,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

type CustomTheme = typeof theme

export type Breakpoint = keyof typeof theme.breakpoints

export function brk(min: Breakpoint) {
  return (contentCss: string): string => `
    @media (min-width: ${theme.breakpoints[min]}px) { ${contentCss} }
  `
}

export function brkbt(min: Breakpoint | null, max: Breakpoint) {
  return (contentCss: string): string =>
    `@media (min-width: ${
      min ? theme.breakpoints[min] : 0
    }px) and (max-width: ${theme.breakpoints[max]}px) { ${contentCss} }
  `
}

export const GlobalStyle = createGlobalStyle``

export const styled = baseStyled as ThemedStyledInterface<CustomTheme>
