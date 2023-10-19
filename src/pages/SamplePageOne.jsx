import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export default function SamplePageOne() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.initialize(
      import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
    )
    ReactGA.set({ page: location.pathname })
    ReactGA.send('pageview')
  }, [location])

  return (
    <>
      <div>page one</div>
    </>
  )
}
