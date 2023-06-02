import { useEffect, useState } from 'react'
import { DOMMessage } from './types'
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
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={gray}
                    onChange={() => setGray(!gray)}
                />
            </label>
        </div>
    )
}

export default App
