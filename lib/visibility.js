// eslint-disable-next-line
let state = {
  isVisible: true,
  isSupported: true
}
let hidden, visibilityChange

if (process.client) {
  if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden'
    visibilityChange = 'visibilitychange'
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden'
    visibilityChange = 'msvisibilitychange'
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden'
    visibilityChange = 'webkitvisibilitychange'
  } else {
    state.isSupported = false
    // eslint-disable-next-line
    console.warn('This browser does not support page visibility api.')
  }

  const handleVisibilityChange = () => {
    if (document[hidden]) {
      state.isVisible = false
    } else {
      state.isVisible = true
    }
  }

  document.addEventListener(visibilityChange, handleVisibilityChange)
}

export default () => state
