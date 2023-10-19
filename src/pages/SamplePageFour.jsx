import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

export default function SamplePageFour() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.initialize(
      import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
    )
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      screenName: '4번 화면',
    })
  }, [location])

  return (
    <>
      <div>page three</div>
    </>
  )
}
