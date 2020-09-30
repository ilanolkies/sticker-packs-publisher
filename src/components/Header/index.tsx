import React from 'react'
import logo from '../../logo.svg'
import newStickerPack from '../../icons/newStickerPack.svg'
import greenEllipse from '../../icons/green_ellipse.svg'
import './style.scss'

type HeaderProps = { account: string }

export default ({ account }: HeaderProps) => <header className="header">
  <p className="header-new-sticker"><img src={newStickerPack} /> New sticker pack</p>
  <div className="header-logo"><img src={logo} /></div>
  <div className="header-account-container"><p className="header-account"><img src={greenEllipse} /> {`${account.slice(0,6)}...${account.slice(38)}`}</p></div>
</header>
