import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import App from './App'
import { GlobalStyle, theme } from './theme'

render(
  <RecoilRoot>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Router>
  </RecoilRoot>,
  document.getElementById('root')
)
