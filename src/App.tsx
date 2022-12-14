import { ThemeProvider } from 'styled-components'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Resume } from './components/Resume'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Resume />

      <Form />
      <GlobalStyle />
    </ThemeProvider>
  )
}
