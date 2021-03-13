import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import GlobalStyle from './style/Global'
import App from './pages/App'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import Providers from './Providers'
import 'inter-ui'
import './i18n'

if ('ethereum' in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false
}

window.addEventListener('error', () => {
   localStorage?.removeItem('redux_localstorage_simple_lists')
})

ReactDOM.render(
  <StrictMode>
    <Providers>
      <>
        <ListsUpdater />
        <ApplicationUpdater />
        <TransactionUpdater />
        <MulticallUpdater />
      </>
      <ResetCSS />
      <GlobalStyle />
      <div 
      className="sticky"
      style={{
        position: "absolute", 
        top: 0, 
        left: 60, 
        width: "30%", 
        height: 60, 
        backgroundColor: "white", 
        zIndex: 1000000, 
        alignItems: "center",
        paddingLeft: 20,
        paddingTop: 15,
      }}
    >
      <span style={{fontSize: 30, fontWeight: 'bold', color: "gold"}}>KHDSwap</span>
    </div>
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
)
