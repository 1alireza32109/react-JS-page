/* eslint max-len: [0] */
import patchMeta from 'libs/patch-meta';

const metas = {
  exp: patchMeta(() => ({
    title: 'Expanse (EXP) Wallet | Guarda',
    url: '/cryptocurrency-exp',
    keywords: 'what is exp, expanse wallet, expanse mining, expanse cryptocurrency, what is expanse, exp mining,exp wallet, exp cryptocurrency, how to buy expanse, expanse technology, how to buy EXP, Expanse valuation, expanse wallet, exp wallet',
    description: 'In this article, Guarda breaks down the basics of Expanse cryptocurrency. We answer common questions like what is Expanse coin, how to get Expanse wallet, is Exp really anonymous and many more. Stay tuned for more EXP cryptocurrency news on Guarda.',
  })),
  xtz: patchMeta(() => ({
    title: 'Tezos (XTZ) Wallet | Guarda',
    url: '/cryptocurrency-xtz',
    keywords: 'tezos, xtz, tezos price, tezos ico, tezos coin, tezos cryptocurrency, tezos news, tezos launch date, buy tezos, how to buy tezos, tezos wallet, tezos foundation, tezos futures, tezos value, tezos crypto, tezos blockchain, tezos exchange, tezos market cap, buy tezos cryptocurrency, tezos coinmarketcap, tezos community, what is tezos, tezos mining, xtz coin',
    description: 'Create a Tezos wallet – free of custody and registration. Lightweight, user-friendly and multiplatform XTZ wallet.',
  })),
  dcr: patchMeta(() => ({
    title: 'Decred (DCR) Wallet | Guarda',
    url: '/cryptocurrency-dcr',
    keywords: 'decred, dcr, what is decred coin, how to buy decred coin, decred price, decred coin, decred wallet, decred mining, decred value, decred crypto, decred news, decred algorithm, decred exchange',
    description: 'In this article, Guarda breaks down the basics of Decred cryptocurrency. We answer common questions like what is Decred coin, how to get Decred wallet, is DCR really anonymous and many more. Stay tuned for more DCR coin news on Guarda.',
  })),
  bsv: patchMeta(() => ({
    title: 'Bitcoin SV (BSV) Wallet | Guarda',
    url: '/cryptocurrency-bsv',
    keywords: 'bitcoin cash sv, bitcoin sv, bch sv, bchsv, bsv, bsv mining, bitcoin sv wallet, buy bsv, how to buy bsv, bitcoin sv price prediction 2018, bsv price, what is bsv, how to store bsv, exchange, crypto exchange, bsv exchange, convert bsv to btc, bsv to btc, buy bsv with bitcoin, bsv to bitcoin exchange, exchange bsv',
    description: 'In this article, Guarda breaks down the basics of Bitcoin SV cryptocurrency. We answer common questions like what is BSV coin, how to get Bitcoin SV wallet, is Bitcoin Cash SV really anonymous and many more. Stay tuned for more Bitcoin SV coin news on Guarda.',
  })),
  xzc: patchMeta(() => ({
    title: 'Zcoin (XZC) Wallet | Guarda',
    url: '/cryptocurrency-xzc',
    keywords: 'zcoin mining, zcoin wallet, what is zcoin, xzc mining, how to buy zcoin, xzc wallet, zcoin cryptocurrency, xzc cryptocurrency, invest in zcoin, how to buy XZC, what is XZC, ZCoin valuation, XZC valuation, invest in XZC',
    description: 'In this article, Guarda breaks down the basics of Zcoin cryptocurrency. We answer common questions like what is XZC coin, how to get Zcoin wallet, is Zcoin really anonymous and many more. Stay tuned for more XZC news on Guarda.',
  })),
  ada: patchMeta(() => ({
    title: 'Cardano (ADA) Wallet | Guarda',
    url: '/cryptocurrency-ada',
    keywords: 'Cardano, ADA, ADA coin,cardano coin, cardano ada, cardano investment, ada cardano, adacoin, what is ada, cardano, ada definition, ada cryptocurrency, cardano cryptocurrency, ada price, buy cardano, store cardano, store ada, what is cardano, ada cryptocurrency',
    description: 'In this article, Guarda breaks down the basics of Cardano cryptocurrency. We answer common questions like what is ADA coin, how to get Cardano wallet, is ADA really anonymous and many more. Stay tuned for more Cardano coin news on Guarda.',
  })),
  xmr: patchMeta(() => ({
    title: 'Monero (XMR) Wallet | Guarda',
    url: '/cryptocurrency-xmr',
    keywords: 'monero, xmr, what is monero, monero wallet, monero price, transaction fees, how to store monero, how to buy monero, monero mining, xmr cryptocurrency, cryptocurrency exchange, convert xmr to btc, buy monero with bitcoin, monero to bitcoin exchange, buy monero, exchange monero, monero blockchain, monero coinmarketcap, monero to bitcoin converter, monero to bitcoin, monero to btc, monero coin wallet, buy monero with credit card, monero cryptocurrency price, monero trading, best way to buy monero, easiest way to buy monero, buy monero with usd, monero exchange',
    description: 'Get the best multi-platform Monero wallet – best XMR crypto storage.',
  })),
  clo: patchMeta(() => ({
    title: 'Callisto (CLO) Wallet | Guarda',
    url: '/cryptocurrency-clo',
    keywords: 'Callisto, clo, callisto clo, callisto coin, callisto wallet, what is callisto, callisto cold staking, what is cold staking, how to get callisto wallet, what is clo, clo mining, callisto crypto, how to buy callisto, buy clo, callisto cryptocurrency, clo cryptocurrency, clo technology, clo news, clo exchange, callisto wallet, callisto hard fork, clo mining',
    description: 'In this article, Guarda breaks down the basics of Callisto cryptocurrency. We answer common questions like what is Callisto, how to get CLO wallet, what is Callisto Cold Staking and many more. Stay tuned for more CLO crypto token news on Guarda.',
  })),
  eth: patchMeta(() => ({
    title: 'Ethereum (ETH) Wallet | Guarda',
    url: '/cryptocurrency-eth',
    keywords: 'ethereum, eth, ethereum price, eth exchange, eth news, ethereum mining, ethereum wallet, ethereum blockexplorer, buy ethereum, DAO, exchange eth, eth rate, eth coins, buy with ethereum, sell ethereum, buy ethereum, how to buy ethereum, ethereum fork, hard-fork, ethereum ticker, ethereum wallet address, ethereum address, ETH transactions, what is ethereum, ethereum block, decentralized platform, smart contracts, decentralized',
    description: 'In this article, Guarda breaks down the basics of Ethereum cryptocurrency. We answer common questions like what is ETH, how to get Ethereum wallet, what is the technology behind ETH and many more. Stay tuned for more Ethereum news on Guarda.',
  })),
  etc: patchMeta(() => ({
    title: 'Ethereum Classic (ETC) Wallet | Guarda',
    url: '/cryptocurrency-etc',
    keywords: 'ethereum classic, etc, etc coin, etc wallet, what is ethereum classic, ethereum hard fork, eht fork, what is etc, etc crypto, etc mining, etc cryptocurrency, ether classic wallet, how to buy etc, etc technology, etc token, ether classic mining, invest in etc, how to buy ether classic, etc echange, ethereum classic exchange, etc news, ethereum classic news, ethereum classic wallet',
    description: 'Start using the best Ethereum Classic wallet – non-custodial, lightweigh, multiplatform .',
  })),
  zec: patchMeta(() => ({
    title: 'Zcash (ZEC) Wallet | Guarda',
    url: '/cryptocurrency-zec',
    keywords: 'Zcash, zec, zcash crypto, zcash mining, zcash news, zcash wallet, zcash to usd, zcash sapling, zcash asic, zcash address, zec coin, zec mining, zec coin price prediction, zec coin news, zec coin price, what is zcash, can zcash be traced, zcash wallet, best zcash wallet, how to get zcash wallet',
    description: 'In this article, Guarda breaks down the basics of Zcash cryptocurrency. We answer common questions like what is Zcash, how to get Zcash wallet, is ZEC really anonymous and many more. Stay tuned for more Zcash news on Guarda.',
  })),
  dash: patchMeta(() => ({
    title: 'Dash (DASH) Wallet | Guarda',
    url: '/cryptocurrency-dash',
    keywords: 'Dash, dash coin, dash coin price, dash coin mining, buy dash coin,, dash coin news, dash coin wallet, what is dash coin, dash coin value, dash coin chart, buy dash coin, dash coin news, dash coin value, exchange dash coin, dash coin exchange, dash cryptocurrency',
    description: 'In this article, Guarda breaks down the basics of Dash cryptocurrency. We answer common questions like what is Dash coin, how to get Dash wallet, is DASH really anonymous and many more. Stay tuned for more Dash coin news on Guarda.',
  })),
  doge: patchMeta(() => ({
    title: 'Dogecoin (DOGE) Wallet | Guarda',
    url: '/cryptocurrency-doge',
    keywords: 'dogecoin, doge, dogecoin price, dogecoin news, dogecoin wallet, buy dogecoin, mining dogecoin, dogecoin miner, doge to btc, doge to usd, how to buy dogecoin, what is dogecoin, doge coins, dogecoin coin, doge exchange, buy with dogecoin, dogecoin symbol',
    description: 'What is Dogecoin and its blockchain features, how to buy DOGE and make it secure.',
  })),
  ltc: patchMeta(() => ({
    title: 'Litecoin (LTC) Wallet | Guarda',
    url: '/cryptocurrency-ltc',
    keywords: 'set up litecoin wallet litecoin wallet, best litecoin wallet, litecoin wallet for android, litecoin wallet android, best wallet for litecoin, itecoin wallet app, litecoin wallet ios, litecoin wallet lookup, LTC wallet',
    description: 'Get the best Litecoin Wallet – registration-free, non-custodial LTC storage',
  })),
  xrp: patchMeta(() => ({
    title: 'Ripple (XRP) Wallet | Guarda',
    url: '/cryptocurrency-xrp',
    keywords: 'ripple, ripple price, ripple xrp, xrp, ripple coin, ripple wallet, buy ripple, how to buy ripple, ripple news, xrp to usd, ripple mining, what is ripple, ripple account, where to buy ripple, 20 xrp, ripple ledger, xrp to btc, ripple network',
    description: 'Set up the best XRP Wallet – registration-free, non-custodial and secure storage for Ripple cryptocurrency.',
  })),
  eos: patchMeta(() => ({
    title: 'EOS (EOS) Wallet | Guarda',
    url: '/cryptocurrency-eos',
    keywords: 'eos, cryptocurrency, blockchain, eos price, eos news, what is eos, eos logo, eos cost, define eos, eos symbol, eos coin, eos wallet, eos launch date, eos mining, eos mining software, eos mining free, cryptocurrency eos, eos dapp, eos crypto, eos currency, eos ico, eos blockchain, eos token, eos architecture, eos smart contract.',
    description: 'What is EOS and its blockchain features, how to buy EOS and make it secure.',
  })),
  btg: patchMeta(() => ({
    title: 'BTG (BTG) Wallet | Guarda',
    url: '/cryptocurrency-btg',
    keywords: 'btg, bitcoin gold, btg price, bitcoin gold price, blockchain, bitcoin gold coin, cryptocurrency, bitcoin gold exchange, what is btg, bitcoin gold wallet, btg wallet, bitcoin old cpu mining, bitcoin gold mining, bitcoin gold hard fork.',
    description: 'What is Bitcoin Gold and its blockchain features, how to buy BTG and make it secure.',
  })),
  bch: patchMeta(() => ({
    title: 'BCH (BCH) Wallet | Guarda',
    url: '/cryptocurrency-bch',
    keywords: 'BCH, bitcoin cash, buy bitcoin cash, how to buy bitcoin cash, cryptocurrency, blockchain, bch meaning, bitcoin cash wallet, bch wallet, bitcoin cash news.',
    description: 'What is Bitcoin Cash and its blockchain features, how to buy BCH and make it secure.',
  })),
  btc: patchMeta(() => ({
    title: 'Bitcoin (BTC) Wallet | Guarda',
    url: '/cryptocurrency-btc',
    keywords: 'bitcoin, BTC, blockchain, bitcoin wallet, bitcoin price, bitcoin talk, bitcoin news, Cryptocurrency, btc price, bitcoin usd, bitcoin stock, bitcoin creator, satoshi, bitcoin security',
    description: 'Get the free multi-platform Bitcoin wallet – the best Bitcoin cryptocurrency storage.',
  })),
};

export default currency => metas[currency];
