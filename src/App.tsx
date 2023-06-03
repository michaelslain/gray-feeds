import { useEffect, useState } from 'react'
import { DOMMessage } from './types'
import { Switch } from '@mui/material'
import styles from './App.module.scss'

function App() {
    const [gray, setGray] = useState<boolean>(true)

    useEffect(() => {
        chrome.tabs &&
            chrome.tabs.query(
                {
                    active: true,
                    currentWindow: true,
                },
                tabs => {
                    chrome.tabs.sendMessage(tabs[0].id || 0, {
                        gray,
                    } as DOMMessage)
                }
            )
    }, [gray])

    return (
        <div className={styles.container}>
            <Switch
                checked={gray}
                onChange={() => setGray(v => !v)}
                size="medium"
            />
        </div>
    )
}

export default App
