/* eslint max-len: [1, 2400] */
import React, { Fragment } from 'react';
import LtcImage from './images/ltc.png';
import styles from './styles.css';
import XrpImage from './images/rpl.png';
import XtzImage from './images/tzs.png';
import XmrImage from './images/xmr.png';
import EtcImage from './images/etc.png';
import BtcImage from './images/btc.png';

export default {
  exp: (
    <Fragment>
      <p>
        Expanse (EXP) is the little cousin of Ethereum, very similar but younger
        and smarter as presented by the co-founder and chief developer
        Christopher Franko. In other words, it is a platform built on top of
        Ethereum made to create smart contracts and decentralized applications
        (dApps). It may sound redundant in the blockchain world but it has its
        own twist. The team consisting of 4 members and 15 ambassadors mainly
        focused on solving the problems of humanity rather than just pure
        technological side. The team led by Christopher Franko carries a strong
        vision since 2015 to make a better world, where human beings have a
        community-based transparent system backed by the blockchain technology.
        One of the problems they claim to be solving a lack of transparency in
        national voting all around the world. They claim to have the best
        decentralized app (dApp) VOTELOCK™ allowing transparent voting systems
        to take place with integrated result validation mechanism. In order to
        support functionalities like this, the platform uses smart contract
        accounts just like Ethereum as a way of storing data to be distributed
        over the network. The contracts can be executed from individual
        accounts, also known as Externally Owned Accounts (EOAs) identified by
        private key pairs. They are solely controlled by people and their
        intentions. Upon data exchange including monetary transactions, the
        sender has to pay a nominal fee for a single operation. Well, this is
        great news for all miners out there. It is not a secret that mining
        Ethereum soon will not be possible due to Constantinople Update
        (postponed til 27th of Feb). Expanse uses the same Proof-of-Work
        consensus algorithm to validate bit exchange in the Network and gives
        EXP tokens in return for validators. Maybe it is time to wipe off the
        dusts off your mining rig? Well, you have to do the calculation first
        about the rewards. More information about current hash-rates,
        profitability and current status of EXP mined of the total of 100M
        available can be found at: https://gander.tech/.
      </p>
    </Fragment>
  ),
  xtz: (
    <Fragment>
      <img src={XtzImage} alt=" Tezos XTZ wallet" style={{ width: '100%' }} />
      <p className={styles.textXrp}>
        First of all, Tezos is a blockchain-based platform, established in the
        US. After an extremely successful ICO (which, by the way, has set an ICO
        record with $232 Million attracted), the project team was pushing
        forward, gaining wider acceptance and more adoption. Tezos is not in the
        top 20 cryptocurrencies on the market. <br /> <br /> The general vision
        of the Tezos team is that the majority of the well-known blockchains are
        not efficient enough. With this idea in mind, Tezos developers made a
        platform that not only allows creating smart contracts and dApp, but is
        also community-developed.
        <br /> <br /> With Tezos, everyone can take part in the life of the
        blockchain. Users make their development proposals and if a consensus is
        reached, the system improves according to the community view. This
        feature is definitely the key phenomena present on the Tezos blockchain.
        Besides, having the users support helps to keep the community united.
        <br />
      </p>
    </Fragment>
  ),
  dcr: (
    <Fragment>
      <p>
        Decred (DCR) is a cryptocurrency that was launched in February 2016 and
        is self-proclaimed as an “open, progressive, and self-funding
        cryptocurrency with a system of community-based governance integrated
        into its blockchain”. It means that Decred is planning to resolve the
        common issues of mining community: decentralisation and fair rewards.
      </p>

      <p>
        Decred was launched by Company 0, founded by the team of btcsuite
        developers. As it was said, the main reason to create a new coin was to
        escape the growing power of selected people in the Bitcoin mining
        community. Hence, the brilliant Decred algorithm that combines two
        consensus methods (proof-of-stake and proof-of-work) was created. The
        new algorithm allows all the people in the community to take part in
        governing the coin. Resource-hungry mining doesn’t allow concentrating
        funds in the small groups of VIPs anymore! Now, there are two ways to
        interact with the blockchain: PoW and PoS. The former uses your
        computing power to generate new tokens and validate transactions running
        through the network, the latter allows you to use your funds and
        validate transactions running through the network. Both types of Decred
        mining are rewarded from DCR block reward. PoW miners get 60%, PoS —
        30%, and 10% go to the Decred Project Treasury.
      </p>

      <p>
        To prove its self-governance, Decred uses a lottery system to select
        five tickets from each pool to validate the previous block and vote if
        any changes to the consensus protocol are needed. There is a fixed
        number of tickets in the pool and every 144 blocks Decred uses a special
        algorithm to determine a new price for a ticket.
      </p>

      <p>
        The coin has proved to be secure and profitable. Decred price is
        steadily growing with the time and all agree that this coin is a good
        investment to make.
      </p>

      <p>
        It doesn’t matter if you are planning on participating in Decred mining
        or staking, you’ll never have a question on how to buy or use Decred
        coin. There are many Decred wallets to choose from, whether you want a
        quick on-the-go mobile option, Chrome extension or full-on web-wallet.
        You can explore all those options for Decred with Guarda! And if you are
        new to the coin you can get started by purchasing DCR with Guarda
        built-in exchange.
      </p>
    </Fragment>
  ),
  bsv: (
    <Fragment>
      <p>
        Bitcoin SV, or BSV, is a cryptocurrency that appeared after the Bitcoin
        Cash hard fork in 2018. The idea of BSV, however, was introduced a
        little bit prior to the fork itself – in summer of the same year. During
        the radical upgrade, the Bitcoin Cash blockchain has split into two
        coins, named Bitcoin ABC and Bitcoin SV. SV, by the way, stands for
        Satoshi’s Vision, as the developers of the coin pride themselves as the
        true followers of Nakamoto’s ideas behind Bitcoin. BSV cryptocurrency
        exists to bring decentralisation, using cryptocurrency as a payment
        method and more network capacity to the world – the values that are
        believed to be the original starting point of BTC.
      </p>
      <p>
        During the fork process, the mining powers of both BSV and BCHABC were
        fully dedicated to the BCH network, so a major decline in Bitcoin price
        followed shortly after the upgrade.
      </p>
      <p>
        The events of the split are known as Bitcoin Cash Hash War in the
        community.
      </p>
      <p>
        Now, you can buy BSV on all the major exchanges and inside your Guarda
        cryptocurrency wallet.
      </p>
    </Fragment>
  ),
  xzc: (
    <Fragment>
      <p>
        Zcoin is a decentralised currency with a focus on anonymity and privacy.
        Also, Zcoin is the first cryptocurrency to implement the Zerocoin
        protocol.{' '}
      </p>
      <p>
        The idea of making a privacy-centered coin appeared when the developers
        decided to solve the issues present in Bitcoin transactions. The final
        goal was making the transaction information concealable so the users can
        hide their identities with the use of special technology.{' '}
      </p>
      <p>
        XZC cryptocurrency works on zero-knowledge proofs – the users can send
        and receive funds without showing the coins that belong to them. Every
        coin of this protocol goes through a process of burning and minting –
        the history of a particular coin gets erased with each cycle.{' '}
      </p>
      <p>
        XZC is mineable. So, if you would like to accumulate some coins, you can
        partake in XCZ mining. However, if you do not want to bother too much
        with the mining process, you can also buy XZC on cryptocurrency
        exchanges.
      </p>
    </Fragment>
  ),
  ada: (
    <Fragment>
      <p>
        Cardano is a technological platform and a financial system created by
        the former CEO of Etherium Charles Hoskinson. Cardano’s cryptocurrency
        called Ada coin spent two years in development before launching in
        September of 2017. It is a truly unique cryptocurrency, as it is based
        on peer-reviewed scientific research. It is sometimes referred to as the
        third-generation blockchain project, solving a lot of issues occurring
        with Bitcoin and Ethereum. Using the system interoperability, Cardano
        sets out an ambitious goal of becoming the ‘internet of
        cryptocurrencies’, where cryptocurrency exchanges can be made possible
        without an intermediate.
      </p>
      <p>
        Cardano blockchain technology operates on the proof-of-stake model, in
        contrast to most cryptocurrencies that use the proof-of-work model. POS
        means that traditional mining processes are substituted with security
        calculations.
      </p>
      <p>
        Ada is more consistent than other cryptocurrencies because of its
        improved scaling. With Ada cryptocurrency, the entire P2P network is
        divided into several nodes called RINA. Within the node, users take
        turns as the system selects a ‘slot leader’ to ‘mine’ for a set period
        of time called an Epoch.
      </p>
    </Fragment>
  ),
  xmr: (
    <Fragment>
      <img src={XmrImage} alt="what is Monero XMR" style={{ width: '100%' }} />
      <p>
        <a
          href="https://www.getmonero.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Monero
        </a>{' '}
        is a privacy-focused cryptocurrency. The crypto coin was created in 2014
        by forking from{' '}
        <a
          href="https://bytecoin.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Bytecoin
        </a>
        . XMR coin is one of the very few currencies that allow users to have
        complete control over their data and privacy settings. Anonymous
        cryptocurrency was in demand during the time of Monero creation, so the
        novelty was greeted on the market as an instant remedy to the blockchain
        openness. <br /> <br />
        Monero is not controlled by any central authority. There is, however, a
        team of developers behind the project who crowdfunded the whole thing.
        Besides this team, there are more than 500 contributors to Monero from
        all around the world. Anyone can contribute to the development by
        submitting their ideas to OpenHub
        <br />
        <p>
          As we have already told, Monero is a fork of{' '}
          <a
            href="https://bytecoin.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bytecoin
          </a>
          . Bytecoin is the first implementation of CryptoNote protocol. Monero
          runs on a protocol called CryptoNote Runs Ring Signatures and Ring
          Confidential Transaction (
          <a
            href="https://eprint.iacr.org/2015/1098.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            RingCT
          </a>
          ). This technology is using cryptographic functions to hide the number
          of funds transferred. Due to this, your transactions become
          untraceable on the blockchain.
          <p>
            Ring Signature technology was proposed back in 2001. More than 10
            years afterwards, Monero team decided to make this mechanism the
            core of how XMR transactions are being structured, The use of Ring
            Signatures protects both sender and receiver, as the transactions
            are not linkable to the addresses.
          </p>
          To sum this paragraph up, we can say that the Monero anonymity policy
          definitely made great use of all the technology they decided to
          utilise.
        </p>
      </p>
    </Fragment>
  ),
  clo: (
    <Fragment>
      <p>
        Callisto is a decentralised open-source platform based on go-Ethereum.
        Many people believe that Callisto occurred as a result of Ethereum
        Classic Hard Fork, however, it is not true. Callisto is actually a side
        chain that exists parallel to the main blockchain. The main target of
        Callisto developing team is solving the troubles of Ethereum Classic
        blockchain and helping it evolve.
      </p>
      <p>
        Callisto network has its own cryptocurrency – CLO. CLO token comes in a
        limited supply of 6 500 000 000 units.
      </p>
      <p>
        CLO technology is also meant to solve the problem of long-term
        cryptocurrency holding. As you might know, some users get bored or
        disencouraged to keep their crypto coins, so they exchange or sell them.
        Callisto is offering a programme to eliminate this problem and offer
        leng-term CLO holders a chance for passive income. This solution is
        called Callisto Cold Staking.
      </p>
      <p>
        CLO Cold Staking is a protocol for rewarding the users with a percentage
        from the total Callisto emission for holding CLO for a certain period of
        time. To take part in the Cold Staking process, the user needs to make a
        contract and freeze some amount of CLO for about a month. If these
        contract rules are met, the staker gets 10% of the tokens from each
        block. There is no need to take part in CLO mining or any other kind of
        a more time-consuming activity to become a staker. In short term,
      </p>
      <p>
        Cold Staking is a great solution for those who have some CLO and want to
        find a passive income option.
      </p>
    </Fragment>
  ),
  eth: (
    <Fragment>
      <p>
        Ethereum is an open-source decentralized platform for managing smart
        contracts, which was developed by a Canadian programmer Vitalik Buterin
        in 2013. The Ethereum mainnet, however, was launched only in 2015.
        Ethereum, implemented as a virtual machine (EVM) and an open source
        platform, simplifies the blockchain adoption worldwide. Ethereum’s goal
        is to enable developers to run their own decentralized applications
        (DApps) with the help of an open distributed network.
      </p>
      <p>
        Ethereum blockchain produces its own cryptocurrency named Ether. The
        currency has ETH ticker.
      </p>
      <p>
        Fractional parts have their own names: 1/1000 – finney, 1/106 – szabo,
        1/1018 – wei. The names are given in honour of the people who played a
        significant role in the blockchain movement.
      </p>
      <p>
        Due to the general market volatility, ETH price, as well as ETH rate,
        constantly vary. However, it remains in the top three cryptocurrencies
        by capitalization according to CoinMarketCap.
      </p>
      <p>
        In 2016, after finding the vulnerability in DAO (Ethereum-based
        decentralized autonomous organization), the hard fork of the Ethereum
        blockchain was implemented. Part of the community disagreed, so as a
        result, the Ethereum blockchain cracked into two branches: Ethereum
        itself and Ethereum Classic – the part of the community which refused
        take part in the fork. Now, these are two separate blockchains with two
        different cryptocurrencies.
      </p>

      <p>How To Buy Ethereum?</p>
      <p>
        You can buy, sell, and exchange ETH for other cryptocurrencies and for
        fiat money, thus Ethereum wallet is needed.
      </p>
      <p>
        There are lots of cryptocurrency wallets on the market: some are
        multicurrency wallets, some are intended for managing Ethereum as a
        single currency. To choose the robust wallet and to be sure your ETH
        assets are protected you need to understand the principles each wallet
        works on and the way it ensures your security. Guarda Wallet is one of
        the most secure and user-friendly solutions currently present on the
        market.
      </p>
    </Fragment>
  ),
  etc: (
    <Fragment>
      <img
        src={EtcImage}
        alt="Ethereum Classic wallet"
        style={{ width: '100%' }}
      />
      <p>
        <a
          href="https://ethereumclassic.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ethereum Classic
        </a>{' '}
        is a “fork” of the{' '}
        <a
          href="https://www.ethereum.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ethereum
        </a>{' '}
        blockchain. The story of this Ethereum split started in quite a bumpy
        manner. However, let’s start with the raw facts of when did the Ethereum
        Classic launch. Ethereum Classic started out in 2016 as a result of a
        radical protocol upgrade of Ethreum network. This fork was one of the
        most intense scandals in the cryptocurrency world, as part of DAO
        project investments were stolen and the dociety brokw into two rival
        groups. DAO lost over 50 Million USD in Ethereum. Despite the scandal,
        ETC was listed on all the major exchanges and supported by almost all
        the cryptocurrency wallet providers during the first months of
        existence.
      </p>
    </Fragment>
  ),
  zec: (
    <Fragment>
      <p>
        Zcash is one of the cryptos that joined the top currency list one of the
        latest. However, it does not get in the way of ZEC coin.
      </p>
      <p>
        In general terms, Zcash is a decentralised, open-source cryptocurrency.
        The company focuses on the user’s privacy and protection. Zcash is
        considered to be offering one of the strongest security features if
        compared to the other popular crypto coins and tokens. Let us explain
        everything in greater detail:
      </p>
      <p>
        Zcash was developed out of a need to make transactions private. The fact
        that Bitcoin transactions are not private was bothersome for some of the
        crypto users – as they believe, the holders should have at least an
        option to hide the transactional data from the public eye. In 2016, the
        community’s expectations were finally met – after the Bitcoin blockchain
        fork, Zcash was created. The origins of the ZEC network can be traced
        back to 2013 when Zerocoin was created to address the privacy issued of
        the Bitcoin blockchain. Zerocoin started to look more like Zcash after
        collaborating with Zooko Wilcox in 2015.
      </p>
      <p>
        Every crypto has some distinct features to differ one coin from another
        (and hence, to sell the product). Well, ZEC is private. Zcash
        transactions are still posted on a public ledger. However, privacy is
        ensured with the use of zero-knowledge proofs. These proofs allow
        transactions to be verified without the personal data disclosure. If you
        have been asking yourself, whether Zcash can be traced, the answer would
        be “partially”. It is possible to view some of the info (only at the
        user’s will) through the so-called viewing keys.
      </p>
      <p>
        The private Zcash address used for the extra-guarded transactions is
        called Z-address. In this case, the Zcash wallet address starts with a
        Z. There is one more type of Zcash address, the T-address. This type of
        wallet address is used to perform transparent transactions.
      </p>
      <p>
        Besides, Zcash uses Equihash Proof-of-Work algorithm, which allows Zcash
        mining to stay decentralised. Due to this, ZEC mining requires more
        memory, but hey, everything for the sake of decentralisation, right?
      </p>
    </Fragment>
  ),
  dash: (
    <Fragment>
      <p>
        If you have heard anything about cryptocurrencies at all, then you must
        know that there is a special type – anonymous cryptocurrencies. Dash is
        exactly one of them.
      </p>
      <p>
        Dash is a development platform, describing themselves as a peer-to-peer
        electronic currency. Dash coin, like many other currencies on the
        market, is open-source and built on its own blockchain. If talking about
        the goals of Dash development team, they do not have any
        extraterrestrial goals for their crypto coin – all they want is for Dash
        to be digital money for the Internet users. Fair enough.
      </p>
      <p>
        Dash coin was created in 2014 by Evan Duffield. At first, Dash coin was
        named XCoin, later rebranded as Darkcoin and then, finally, received its
        current name.
      </p>
      <p>
        The main idea of Dash creator was making a version of Bitcoin that would
        be faster and MUCH more private. So, Duffield decided to utilise the
        Bitcoin core code and make something totally new out of it. This is how
        Dash was born.
      </p>
      <p>There is more to Dash technology:</p>
      <p>
        Dash cryptocurrency comes with a maximum supply of 18 million coins. It
        sure might seem a little less than other cryptos, but do not worry, this
        amount of Dash will be enough for us to work with until 2300. Dash coin
        mining time is 2.5 minutes, which is actually very fast (4 times faster
        than BTC)!
      </p>
      <p>
        Besides, Dash allows their users to send the funds privately by
        “confusing” the system. The sent transaction gets mixed with other
        transfers, making it extremely challenging to identify one single
        performed transaction. The privacy feature od Dash coin is optional and
        has a limited cap of 1000 Dash that can be sent through the anonymous
        feature.
      </p>
      <p>
        There is another key point in favour of Dash. Dash coin has Instant Send
        – the service allowing users to send their Dash in just 1.5 seconds.
      </p>
      <p>
        When it comes to buying Dash coin, there are many options to choose
        from. Major exchanges (just as well as major crypto wallet companies)
        support the promising anonymous crypto. Currently, you can buy Dash both
        for crypto and fiat on all the leading cryptocurrency exchange services.
        Dash price in the very beginning of this crypto’s life started at $0.02.
        After a period of massive fluctuations, Dash coin value ended up at what
        we see now – to around $77 at the time of writing.
      </p>
    </Fragment>
  ),
  doge: (
    <Fragment>
      <p>
        Dogecoin is a joke cryptocurrency, well, formerly a joke cryptocurrency.
        DOGE, named after a popular internet meme with a Shiba Inu dog, was
        created in 2013. The developers just wanted to create this crypto coin
        for fun and did not have true intentions of getting it out to the market
        or trading. However, the community liked the new notion and spread the
        word about the new coin, making this cryptocurrency viral.
      </p>
      <p>
        DOGE coin aims at creating a cryptocurrency that does not bother with
        the usual problems of other popular coins. The rules are simple – less
        seriousness equals a happier life. No troubles. The laid-back attitude
        attracted an impressive amount of people who support Dogecoin. The
        community is truly loyal in their following and, unlike some other
        crypto coin groups, is very welcoming. As Dogecoin news state, the
        crypto is often used for various charities, raising funds for a good
        cause and so on. Dogecoin price was never as high as BTC or ETH, but
        also DOGE comes in an unlimited amount coins, which justifies a rather
        humble value. For example, there can only be 21 million Bitcoins issued
        – DOGE does not have to think about it. Dogecoin price history is more
        on the stable side, too. On the other hand, cryptocurrency experts have
        goof future price projections for this crypto.
      </p>
    </Fragment>
  ),
  ltc: (
    <Fragment>
      <img
        src={LtcImage}
        alt="Litecoin LTC cryptocurrency"
        style={{ width: '100%' }}
      />
      <p>
        The origins of Litecoin date back to 2011. The established
        cryptocurrency received a ticker LTC and a Ł symbol. At the time of
        introducing the network to the world, Litecoin founders had the idea of
        creating a network that would eliminate the major Bitcoin flaws. The
        creation of Litecoin is definitely much less mysterious than the one of
        BTC. The original idea of creating a better, faster and lighter Bitcoin
        belongs to Charlie Lee, a former Google member. The creator of Litecoin
        is very active on social media and does not hesitate to share his
        opinions – you can check it on Lee’s{' '}
        <a
          href="https://twitter.com/satoshilite"
          target="_blank"
          rel="noreferrer noopener"
        >
          Twitter
        </a>
        .
      </p>
      <p>
        Despite the fact that Litecoin is based on some of Bitcoin’s technical
        solutions, it is important to say that LTC was successful in increasing
        the number of processing transactions as well as their speed. Nowadays,
        Litecoin is a popular cryptocurrency with its own follower base. Head to
        the Foundation{' '}
        <a
          href="https://litecoin-foundation.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          website
        </a>{' '}
        for more Litecoin news and updates.
      </p>
      <p>
        LTC is a peer-to-peer open-source cryptocurrency. As for the use,
        Litecoin can be divided into 100,000,000 smaller units, defined by eight
        decimals. The price of Litecoin is corrected in a traditional
        cryptocurrency manner – by the coin’s supply and demand.
      </p>
      <p>
        Litecoin is the first altcoin that was created after the Bitcoin Core
        client hard fork. Hard forks are radical upgrades of networks that lead
        to chain splits. After Bitcoin hard fork on October 13, 2011, Litecoin
        went live with a decreased block generation time, increased maximum
        supply and a different hashing algorithm.
      </p>

      <table className={styles.tableInfo}>
        <thead>
          <tr>
            <td>Max Supply</td>
            <td>Algorithm</td>
            <td>Proof Type</td>
            <td>Start Date</td>
            <td>Website</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>84,000,000.0</td>
            <td>Scrypt</td>
            <td>PoW</td>
            <td>13/10/2011</td>
            <td>
              <a
                href="https://litecoin.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Litecoin
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  ),
  xrp: (
    <Fragment>
      <img src={XrpImage} alt="Ripple XRP wallet:" style={{ width: '100%' }} />
      <p className={styles.textXrp}>
        RippleNet is a network focusing on institutionalised payment solutions.
        The developmental achievements of Ripple team are aimed at providing
        banks and money transfer services seamless experience of worldwide value
        transfers. <br /> The platform allows making payments in any currency,
        including crypto with a minimal commission (that is just meant to help
        to prevent attacks on the network). The story of Ripple started in 2013,
        with Jed McCaleb inviting major investors to put their money into Ripple
        Labs development. Starting with the help of the Angel investors in 2013,
        Ripple started growing.
      </p>

      <p className={styles.textSimple}>
        We are used to the world where cryptocurrencies have their own
        blockchain. This is, however, not a case for Ripple. To verify the
        transactions no the network, Ripple uses the specially designed, and
        patented, tool – Ripple Protocol Consensus Algorithm (RPCA). All the
        nodes need to be in agreement with each other – until they are, no
        decision can be made.
      </p>
    </Fragment>
  ),
  eos: (
    <Fragment>
      <p>
        EOS is a platform created to run and create decentralised applications,
        also known as DApps. The network based on the blockchain and was created
        in 2017 by Dan Larimer. The project started with an ICO, where people
        could get tokens when paying in Ethereum.
      </p>

      <p>
        The developers and founders of EOS wanted to create a blockchain
        platform that allows developers to create DApps freely and without
        limitations. EOS main aim is to scale as many transactions per seconds
        as possible, simultaneously providing an accessible experience to the
        developers and users. Indeed, it is quite easy to use. For this reason,
        financial analysts around the world proclaim EOS as the future of
        distribution companies and blockchain.
      </p>

      <p>
        EOS LOGO: The EOS logo is a Chestahedron, the first heptahedron in
        Geometry, having 7 surfaces (4 triangles and 3 quadrilaterals), making
        it very innovative, creative and original in the cryptocurrency world.
      </p>

      <p>
        If you ask us how to buy EOS, the answer is quite simple – EOS can be
        purchased on Guarda along with major cryptocurrency exchanges. EOS pairs
        with other cryptocurrencies and fiat money.
      </p>
    </Fragment>
  ),
  btg: (
    <Fragment>
      <p>
        Bitcoin Gold is an open-source cryptocurrency project developed by
        Bitcoin volunteers. It was created as a result of a hard fork (radical
        protocol upgrade) on October 25, 2017. The Bitcoin Blockchain was split
        on block 491407, creating two parallel chains.
      </p>
      <p>
        The objective of Bitcoin Gold was &quot;to decentralise Bitcoin&quot;.
        This collocation might seem contradictory, but the Bitcoin Gold
        supporters implied that the upgrade will decentralise mining by adopting
        a PoW algorithm and Equihash-BTG. Due to this, the users can mine BTG
        with common GPUs instead of ASIC.
      </p>

      <p>
        Bitcoin Gold has been accepted quite positively from the beginning, so
        various platforms offered their support to the novelty.
      </p>
      <p>
        As for now, Bitcoin Gold is a coin available on the majority of
        exchanges and, of course, within Guarda wallets. Buying BTG is possible
        with cryptocurrency transfers and with bank cards. Sometimes crypto
        exchanges charge extra fees can –pay attention to it and keep in mind
        that Guarda will not charge you with any additional transaction fees.
      </p>
      <p>
        Bitcoin Gold price, just as any other crypto, is quite volatile and is
        based on the coin’s supply and demand.
      </p>

      <p>
        BTG as a cryptocurrency has something interesting about it – they went
        through a hard fork you can get some BTG coins for free! How do you
        claim Bitcoin Gold for free? To be fair, this is a “privilege” only for
        those who owned original Bitcoins before the fork. So, those who had
        Bitcoins before the hard fork can actually get the amount they had in
        the wallet in the moment of the split in BTG. If you are one of those,
        do not hesitate to claim yours!
      </p>
    </Fragment>
  ),
  bch: (
    <Fragment>
      <p>
        Bitcoin Cash (BCH) is a cryptocurrency derived from Bitcoin, which
        appeared due to a hard fork produced in BTC which was established at the
        end of block 478558 on August 1, 2017. This is the first “hard fork”
        (bitcoin blockchain software update), resulting of a series of
        disagreements between miners about the update, that’s why the Bitcoin
        Blockchain endured a division of bitcoin blockchain. There were 2
        parties, the first one was created by Bitcoin miners, and the other one
        was made up of the Bitcoin community. Miners wanted Bitcoin to use
        bigger blocks in order to allow more transactions, but users and
        developers wanted to implement an upgrade, called Segregated Witness
        (SegWit), so more transactions could fit in each block. So as they did
        not agree, Bitcoin was divided into two different currencies and that is
        how Bitcoin Cash was created, being supported by miners who wanted to
        have bigger blocks.
      </p>
      <p>
        Bitcoin Cash shares the block history of the base cryptocurrency, but
        like all hard forks, it uses a different blockchain. BCH is an improved
        version of the BTC software. The main improvement offered by Bitcoin
        Cash is an increase in the block size limit to 8 MB. This allows the
        miners of the BCH chain to process more payments per second, providing
        faster and cheaper transactions and a much smoother user experience.
        Although Bitcoin is the first cryptocurrency in the world and the one
        with the highest value, this doesn’t mean that it’s the safest and the
        most effective when making transactions. It is a project in constant
        development by the community, and that allows the existence of different
        alternatives, like Bitcoin Cash, which provides a high level of security
        and effective transactions.
      </p>
      <p>
        Bitcoin Cash offers a strong currency to the world, fulfilling the
        initial promise of Bitcoin as digital money from user to user. Users and
        merchants can enjoy low commissions and reliable confirmations. When it
        was launched its opening price was around $200 USD and currently
        (October 2018) it has an estimated price of $450 USD per 1 BCH. The
        price, as for all cryptocurrencies, is determined by its supply and
        demand.
      </p>
      <p>
        If you had Bitcoins prior to August 1st, 2017 when the Bitcoin Cash hard
        fork happened, you are able to claim the same amount of tokens in
        Bitcoin Cash. Even if you haven’t asked for your coins yet, they will be
        safe so you can ask for them anytime.
      </p>
      <p>
        How to buy bitcoin cash? You can buy Bitcoin Cash online in several
        cryptocurrency exchanges and go to a bitcoin cash exchange, currently
        there are hundreds of them operating. Most of them accept payment via
        bank transfer or credit card and some of them may charge fees. When you
        have made your payment, the exchanger will purchase the amount of
        Bitcoin Cash that you have paid for and then the exchanger will deposit
        the coins in a wallet on the exchange.
      </p>
      <p>
        If you’re searching for more Bitcoin Cash news, discussions and expert
        opinions about bitcoin cash, try NewsBTC.
      </p>
    </Fragment>
  ),
  btc: (
    <Fragment>
      <img src={BtcImage} alt="BTC wallet" style={{ width: '100%' }} />
      <p>
        Everything started with{' '}
        <a
          href="https://bitcoin.org/en/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Bitcoin
        </a>
        . Bitcoin is the beginning. Bitcoin is the end. Nevermind. Let’s look a
        little bit deeper into the history of the most popular cryptocurrency.
        <br />
        Bitcoin was proposed in 2008 by the most mysterious persona in the
        cryptocurrency space – software developer Satoshi Nakamoto. It all
        started with the Bitcoin{' '}
        <a
          href="https://bitcoin.org/bitcoin.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          whitepaper
        </a>
        . What Nakamoto offered is a peer-to-peer electronic payment system
        aiming to solve the problem of existing services. The idea was creating
        an asset without any central authority and a transparent network to
        manage it. <br />
        The idea is brilliant, but up until this day nobody knows who the
        creator actually was.
        <br />
      </p>
    </Fragment>
  ),
};
