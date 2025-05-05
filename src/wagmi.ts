import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { createConfig, fallback, http } from 'wagmi';
import { arbitrum, foundry, mainnet, optimism, polygon, scroll, scrollSepolia } from 'wagmi/chains';
import {
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';

import { okxWallet, binanceWallet, uniswapWallet, trustWallet, coinbaseWallet, metaMaskWallet, injectedWallet, walletConnectWallet, safeWallet, rainbowWallet, ledgerWallet, bitgetWallet, zerionWallet, imTokenWallet, rabbyWallet, phantomWallet } from '@rainbow-me/rainbowkit/wallets';


const ANVIL_URL = 'http://127.0.0.1:8545';
const SCROLL_URL = "https://scroll-mainnet.g.alchemy.com/v2/won93Ou1nTcFLb8kzr1Fd15vdvPoczLu";

const appName = 'knowunknownable.love';
export const isDev = process.env.NODE_ENV === 'development';
const devUseScrollSepolia = true;
export const deployChain = isDev ? (devUseScrollSepolia ? scrollSepolia : foundry) : scroll; //scrollSepolia : scroll;

const projectId = isDev ? '152ef30017cfad613ad6a7e8f190c2ec' : 'a159d003adf3197c439c82598a53231b'; // no constraints

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Popular',
      wallets: [
        okxWallet,
        binanceWallet,
        rabbyWallet,
        metaMaskWallet,
      ],
    },
    {
      groupName: 'More',
      wallets: [
        coinbaseWallet,
        phantomWallet,
        trustWallet,
        zerionWallet,
        safeWallet,
        uniswapWallet,
        rainbowWallet,
        bitgetWallet,
        ledgerWallet,
        injectedWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    projectId,
    appName,
  },
);

export const config = createConfig({
  connectors: [
    ...connectors,
  ],
  chains: [deployChain],
  pollingInterval: 16000,
  cacheTime: 32000,
  ssr: false,
  transports: {
    [scroll.id]: fallback([http(SCROLL_URL), http()]),
    [scrollSepolia.id]: http(),
    [foundry.id]: http(ANVIL_URL),
  },
  multiInjectedProviderDiscovery: true
});