import React, { useState } from 'react';
import 'typeface-roboto';
import Web3Modal from "web3modal";
import Web3 from 'web3';
import { Header } from './components';
import { Landing, Dashboard, NewStickerPack } from './pages';

// draft: globals

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions: []
});

const DASHBOARD_PAGE = 'DASHBOARD_PAGE'
const NEW_STICKER_PACK_PAGE = 'NEW_STICKER_PACK_PAGE'

const Home = (props: any) => {
  // draft: state

  // wallet
  const [connected, setConnected] = useState(false)
  const [accounnt, setAccount] = useState('')

  // navigation
  const [currentPage, setCurrentPage] = useState(DASHBOARD_PAGE)

  const goToNewStickerPackPage = () => { console.log('hellos'); setCurrentPage(NEW_STICKER_PACK_PAGE) }

  // web3modal connect
  const connect = () => web3Modal.connect().then(provider => {
    setConnected(true)
    const web3 = new Web3(provider)
    return web3.eth.getAccounts().then(accounts => setAccount(accounts[0]))
  })

  // draft: operations
  return <>
    {
      !connected ? <Landing connect={connect} /> : <div className="app">
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
    <p className="t_and_p">
      <b>Status Sitckers</b><br />
      Terms • Privacy
    </p>{/* add links */}

    {/* draft: render */}
  </>
};

var containerStyle = {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

function App() {
  return (
    <div style={containerStyle}>
      <Home />
    </div>
  );
}

export default App;
