// eslint-disable-next-line
let state = {
  isVisible: true,
  isSupported: true
}

if (process.client) {
  let hidden, visibilityChange

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
