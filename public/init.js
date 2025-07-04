function init (apiKey) {
  async function handleLoadWidget () {
    const page = `${window.location.origin}${window.location.pathname}`
    const fp = await window.FingerprintJS.load()
    const fingerprint = await fp.get()

    const WIDGET_URL = `https://Jezebel1990-feedbacker-widget.netlify.app?api_key=${apiKey}&page=${page}&fingerprint=${fingerprint.visitorID}`
    const config = { method: 'HEAD' }
    const res = await fetch(`https://backend-vue3-snowy.vercel.app/apikey/exists?apikey/exists?apikey=${apiKey}`, config)

    if (res.status === 200) {
      const iframe = document.createElement('iframe')
      iframe.src = 'feedbacker-iframe'
      iframe.style.position = 'fixed'
      iframe.style.bottom = '0px'
      iframe.style.right = '0px'
      iframe.style.overflow = 'hidden'
      iframe.style.border = '0px'
      iframe.style.zIndex = '99999'
      document.body.appendChild(iframe)

      window.addEventListener('message', (event) => {
        if (!event.data.isWidget) return

        if (event.data.isOpen) {
          iframe.width = '100%'
          iframe.height = '100%'
        } else {
          iframe.width = '300px'
          iframe.height = '150px'
        }
      })
      return
    }

    console.log('* [feedbacker] was not loaded because apikey does not exists')
  }

  const script = document.createElement('script')
  script.src = '//cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js'
  script.async = 'async'
  script.addEventListener('load', handleLoadWidget)

  document.body.appendChild(script)
}
window.init = init
