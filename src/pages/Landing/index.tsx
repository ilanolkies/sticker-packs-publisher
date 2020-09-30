import React from 'react'
import logo from '../../logo.svg'
import Button from '@material-ui/core/Button';
import './style.scss'

type LandingProps = { connect: () => void, loading: boolean, connecting: boolean }

const getLoadingClass = (loading: boolean) => loading ? ' hidden-elem' : ''

export default ({ connect, loading, connecting }: LandingProps) => {
  const loadingClass = getLoadingClass(loading)

  return <div className="landing">
    <img src={logo} className="moving-elem" />
    <h2 className={`landing-header moving-elem${loadingClass}`}>Sell stickers. Earn SNT.</h2>
    <p className={`landing-muted moving-elem${loadingClass}`}>To publish stickers to the Status Sticker Market, first connect your Ethereum wallet.</p>
    <Button className={`moving-elem${loadingClass}`} variant="contained" component="span" color="primary" onClick={connect} disabled={loading || connecting}>Conenct wallet</Button>
  </div>
}
