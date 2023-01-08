import { InjectedConnector } from '@web3-react/injected-connector'

export const CONVERTER_VALUE : number = 3;

export const INJECTED : InjectedConnector = new InjectedConnector({
  supportedChainIds: [3,1, 4, 5, 42],
})

export const IS_WALLET_CONNECTED: string = "isWalletConnected";

export const CURRENCY_CONVERTER_TITLE: string = "Currency Converter";
export const PLEASE_CONNECT_INFO: string = "Please connect to your wallet first.";