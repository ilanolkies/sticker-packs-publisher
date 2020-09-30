import React, { ReactNode } from 'react'
import logo from '../../logo.svg'
import greenEllipse from '../../icons/green_ellipse.svg'
import './style.scss'

type HeaderProps = { account: string, toggle: ReactNode, onToggle: () => void }

export default ({ account, toggle, onToggle }: HeaderProps) => <header className="header">
  <div onClick={onToggle}>{toggle}</div>
  <div className="header-logo"><img src={logo} /></div>
  <div className="header-account-container"><p className="header-account"><img src={greenEllipse} /> {`${account.slice(0,6)}...${account.slice(38)}`}</p></div>
</header>
