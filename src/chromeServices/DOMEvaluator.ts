import grayOut from './grayOut'

chrome.runtime.onMessage.addListener(grayOut)
grayOut()
