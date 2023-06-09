import { ThemeProvider, BaseStyles } from '@primer/react'

import CodeNavPage from './CodeNavPage'
import ColorModeSwitcher from './ColorModeSwitcher'
function App() {
    return (
        <ThemeProvider colorMode="auto">
            <BaseStyles>
                <CodeNavPage />
                <ColorModeSwitcher />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
