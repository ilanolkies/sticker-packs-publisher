import React, { useState } from 'react';
import 'typeface-roboto';
import { Header } from './components';
import { Landing, Dashboard, NewStickerPack } from './pages';
import { web3Modal, subscribeProvider, initWeb3 } from './lib'
import './style.scss'
// draft: globals

const DASHBOARD_PAGE = 'DASHBOARD_PAGE'
const NEW_STICKER_PACK_PAGE = 'NEW_STICKER_PACK_PAGE'

const DEFAULT_WEB3 = {}
const DEFAULT_CONNECTED = false
const DEFAULT_ACCOUNT = ''
const DEFAULT_CHAIN_ID = ''

const App = (props: any) => {
  // draft: state

  // wallet
  const [web3, setWeb3] = useState(DEFAULT_WEB3)
  const [connected, setConnected] = useState(DEFAULT_CONNECTED)
  const [accounnt, setAccount] = useState(DEFAULT_ACCOUNT)
  const [chainId, setChainId] = useState(DEFAULT_CHAIN_ID)

  const reset = () => {
    setWeb3(DEFAULT_WEB3)
    setConnected(DEFAULT_CONNECTED)
    setAccount(DEFAULT_ACCOUNT)
    setAccount(DEFAULT_CHAIN_ID)
  }

  // navigation
  const [currentPage, setCurrentPage] = useState(DASHBOARD_PAGE)

  const goToNewStickerPackPage = () => setCurrentPage(NEW_STICKER_PACK_PAGE)

  // web3modal connect
  const connect = () => web3Modal.connect().then(provider => {
    const web3 = initWeb3(provider)

    subscribeProvider(provider, {
      handleClose: reset,
      handleAccountsChanged: reset,
      handleChainChanged: reset,
      handleNetworkchanged: reset
    })

    return Promise.all([
      web3.eth.getAccounts().then((accounts: string[]) => setAccount(accounts[0])),
      web3.eth.chainId().then(setChainId)
    ]).then(() => {
      setConnected(true)
      setWeb3(web3)
    })
  })

  // draft: operations
  return <>
    <div className="app">
      {
        !connected ? <Landing connect={connect} /> : <div className="app-container">
          <Header account={accounnt} />
          {
            (function () {
              switch (currentPage) {
                case DASHBOARD_PAGE: return <Dashboard goToNewStickerPackPage={goToNewStickerPackPage} />
                case NEW_STICKER_PACK_PAGE: return <NewStickerPack />
                default: throw new Error('Invalid page')
              }
            })()
          }
        </div>
      }

      {/* draft: render */}
    </div>
    <p className="t_and_p">
      <b>Status Sitckers</b><br />
      Terms • Privacy
    </p>{/* add links */}
  </>
}

export default App
