import { createConfig, http } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
const chain = process.env.NEXT_PUBLIC_PROD !== 'false' ? base : baseSepolia;
console.log('==== chain in wagmi', chain)
console.log('====  process.env.NEXT_PUBLIC_PROD in wagmi',  process.env.NEXT_PUBLIC_PROD)

const wagmiConfig = createConfig({
  chains: [chain],
  connectors: [
    coinbaseWallet({
      appChainIds: [chain.id],
      appName: 'CHOMP Legacy',
      // preference: 'smartWalletOnly' 
    }),
  ],
  ssr: true,
  transports: {
    // [chain.id]: http(),
    [chain.id]: http(process.env.NEXT_PUBLIC_RPC_URL),
  },
});

export default wagmiConfig;