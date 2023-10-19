import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'

export default function RouteChangeTracker() {
  const location = useLocation()
  // const [initialized, setInitialized] = useState(false)

  // useEffect(() => {
  //   if (!window.location.href.includes('localhost')) {
  //     ReactGA.initialize(
  //       import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
  //     )
  //     setInitialized(true)
  //   }
  // }, [])
  //
  // useEffect(() => {
  //   if (initialized) {
  //     ReactGA.set({ page: location.pathname })
  //     ReactGA.send('pageview')
  //   }
  // }, [initialized, location])

  useEffect(() => {
    ReactGA.initialize(
      import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
    )
    ReactGA.set({ page: location.pathname })
    ReactGA.send('pageview')
  }, [location])
}
