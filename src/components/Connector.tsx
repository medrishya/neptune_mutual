import { useWeb3React } from "@web3-react/core"
import { ReactElement, useEffect, useState } from "react"
import { INJECTED, IS_WALLET_CONNECTED, PLEASE_CONNECT_INFO } from "../constants";

export function Connector () : ReactElement {
  const { active, account,chainId, library, activate, deactivate }  = useWeb3React();

  const [balance, setBalance] = useState<number>();
  const [ connecting , set_connecting] = useState<boolean>(false);

  async function connect() {
    try {
      set_connecting(true);
      await activate(INJECTED);
      localStorage.setItem(IS_WALLET_CONNECTED, "true")
    } catch (ex) {
      console.log(ex)
    }finally{
      set_connecting(false);
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem(IS_WALLET_CONNECTED, "false")
    } catch (ex) {
      console.log(ex)
    }
  }


  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem(IS_WALLET_CONNECTED) === 'true') {
        try {
          await activate(INJECTED)
          localStorage.setItem(IS_WALLET_CONNECTED, "true")
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  useEffect(() => {
    if(!!library && !!account){
      let stale = false
      library?.eth?.getBalance(account)
      .then((balance: any) => {
        if (!stale) {
          setBalance(balance)
        }
      })
      .catch(() => {
        if (!stale) {
          setBalance(undefined)
        }
      })
    }
    },[account,library]);

  return (
    <div>
      <div>
      {active ? 
        <div className="animate">
         <div >
          <div className="category">
              <span>Chain</span>
              <span>{chainId}</span>
            </div>
            <div className="category">
              <span>Balance</span>
              <span>{balance} ETH </span>
            </div>
          </div>
          <div>
            <button onClick={disconnect}  className="primary-button">Disconnect my wallet</button>
          </div>
        </div> 
        : 
         <div>
          <div>
            <span className="span-text"> { PLEASE_CONNECT_INFO}</span>
          </div>
          <button onClick={connect} className="primary-button"> {connecting ? "Connecting ..." : "Connect to my wallet" } </button>
        </div> }
      </div>
    </div>
  )
}
