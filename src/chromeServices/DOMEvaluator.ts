import grayOut from './grayOut'

chrome.runtime.onMessage.addListener(grayOut)
window.onload = () => grayOut()
