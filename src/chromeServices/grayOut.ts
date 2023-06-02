import BLOCKED_WEBSITES from './blockedWebsites'
import { DOMMessage } from '../types'

const grayOut = (msg?: DOMMessage): void => {
    const url = window.location.href

    if ((!msg || msg.gray) && BLOCKED_WEBSITES.includes(url)) {
        document.body.style.filter = 'grayscale(100%)'
        return
    }

    document.body.style.filter = 'grayscale(0%)'
}

export default grayOut
