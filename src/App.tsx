
import { Main } from './components';

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { ReactElement } from 'react';

function getLibrary(provider:any) {
  return new Web3(provider)
}

function App() : ReactElement {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Main />
      </div>
    </Web3ReactProvider>
  );
}

export default App;

