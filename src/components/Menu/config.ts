import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : 'https://KHDSwapswap.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/farms` : 'https://KHDSwapswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/syrup` : 'https://KHDSwapswap.finance/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/lottery` : 'https://KHDSwapswap.finance/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/nft` : 'https://KHDSwapswap.finance/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/teams` : 'https://KHDSwapswap.finance/teams',
      },
      {
        label: 'Task Center',
        href: process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/profile/tasks` : 'https://KHDSwapswap.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/profile` : 'https://KHDSwapswap.finance/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://KHDSwapswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://KHDSwapswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://KHDSwapswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://KHDSwapswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://KHDSwapswap.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.KHDSwapswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/KHDSwapswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.KHDSwapswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://KHDSwapswap.medium.com',
      },
    ],
  },
]

export default config
