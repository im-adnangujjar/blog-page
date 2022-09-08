import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [pageLoad, setPageLoad] = useState(false)

  useEffect(() => {
    setPageLoad(true)
  }, [])

  if (pageLoad) return <Component {...pageProps} />
  return null
}

export default MyApp
