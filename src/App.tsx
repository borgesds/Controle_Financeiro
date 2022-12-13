import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Resume } from './components/Resume'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Resume />
      <GlobalStyle />
    </ThemeProvider>
  )
}
