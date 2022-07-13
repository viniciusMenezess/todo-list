import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      PURPLE: string
      PURPLE_DARK: string

      BLUE: string
      BLUE_DARK: string

      GRAY_700: string
      GRAY_600: string
      GRAY_500: string
      GRAY_400: string
      GRAY_300: string
      GRAY_200: string
      GRAY_100: string

      RED: string
      WHITE: string
    }
  }
}
