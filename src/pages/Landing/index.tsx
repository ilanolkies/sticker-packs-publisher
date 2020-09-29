import React from 'react'
import logo from '../../logo.svg'
import Button from '@material-ui/core/Button';
import './style.scss'

type LandingProps = { connect: () => void }

export default ({ connect }: LandingProps) => <div className="landing">
  <img src={logo} />
  <h2 className="landing-header">Sell stickers. Earn SNT.</h2>
  <p className="landing-muted">To publish stickers to the Status Sticker Market, first connect your Ethereum wallet.</p>
  <Button variant="contained" component="span" color="primary" onClick={connect}>Conenct wallet</Button>
</div>
