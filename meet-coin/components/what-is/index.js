import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrencyInfo } from 'libs/currency-info';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
// import { NavLink } from 'components/global/link';
import styles from './styles.css';
import texts from './texts';
import XmrCrypImage from './images/xmrCryoto.png';
import EtcCrypImage from './images/etcCryoto.png';
import BtcCrypImage from './images/btcCryoto.png';

export default class WhatIs extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!window) {
      return;
    }
    const baseUrl = 'https://widgets.cryptocompare.com/';
    const appName = encodeURIComponent(window.location.hostname) || 'local';
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    const theUrl = `${baseUrl}serve/v1/coin/chart?fsym=${this.props.currency.toUpperCase()}&tsym=USD`;
    s.src = `${theUrl + (theUrl.indexOf('?') >= 0 ? '&' : '?')}app=${appName}`;
    document.getElementById('chart').appendChild(s);
  }

  render() {
    if (this.props.currency === 'xrp') {
      return (
        <div className={styles.wrapper}>
          <div className="container">
            <CenterTitle
              title="Everything you need to know about Ripple XRP"
              className={styles.title}
            />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">{texts[this.props.currency]}</div>
            </div>
          </div>
          <div className="container">
            <CenterTitle
              title="Why is Ripple Useful?"
              className={styles.title}
            />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">
                <p className={styles.textSimple}>
                  Ripple helps to solve several issues of the modern banking
                  system, including:
                </p>
                <p className={styles.textSimple}>
                  <b>Expensive currency exchanges.</b> There is a wide range of
                  currencies that cannot be directly converted into one another.
                  In the case of exchanges like this, banks need to use USD as a
                  mediator – this is an expensive way, as the double commission
                  is present. Using Ripple as a mediator for exchanges is much
                  cheaper.
                </p>
                <p className={styles.textSimple}>
                  <b>Slow international transactions.</b> Bank transfers may
                  take a while when performed internationally. Bitcoin
                  transactions may take a couple of hours. Ripple solves this
                  problem with the average transaction time of 4 seconds.{' '}
                </p>
                <p className={styles.textSimple}>
                  <b>Inability to vary.</b> With Ripple, users can issue their
                  own currencies designed for specific needs. If you want to
                  have the Baguette Dollar created just for purchasing fresh
                  bread from your friendly local merchant – go for it!{' '}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div className="container">
              <CenterTitle
                title="Ripple XRP cryptocurrency"
                className={styles.title}
              />
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <p>
                    Ripple XRP is a token that is designed to represent the
                    above-mentioned transfer of value across the network.
                    Basically, XRP is a mediator for the exchanges. This token
                    is quite a shapeshifting entity that can represent various
                    currencies. To understand how Ripple works better, we will
                    provide an example: You want to swap your British pounds to
                    Dollars. XRP can represent both sides of the exchange to
                    make the commission almost nonexistent (Ripple fee is
                    $0.00001) After the transaction is done, the fee amount
                    vanished from the network forever.
                  </p>

                  <p>
                    Ripple cryptocurrency has a great advantage because of its
                    transaction speed. Sure, if you compare any crypto with
                    traditional bank transfers, cryptocurrencies will win with
                    their general processing speed. However, XRP manages to
                    score even when compared to the other popular crypto coins.
                    Ripple manages to cut transaction times more than in half
                    (compared to some of the competitors). Great advantage on
                    the ever-growing market for sure. Another major benefit is
                    Ripple’s capacity of making up to 1500 transactions per
                    second. It allows reaching maximum fluidity when managing
                    large transfers, literally anywhere in the world.
                  </p>

                  <p>
                    There is no Ripple mining, as 100.000 million XRP were
                    issued by the developers of this crypto – this amount of
                    coins will remain unchanged.
                  </p>
                  <table className={styles.tableInfo}>
                    <thead>
                      <tr>
                        <td>Market Cap</td>
                        <td>Max Supply</td>
                        <td>Circulating Supply</td>
                        <td>Whitepape</td>
                        <td>Twitter</td>
                        <td>Website</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$12,688,372,313 USD </td>
                        <td>100,000,000,000</td>
                        <td>41,400,000,000</td>
                        <td>
                          <a
                            href="https://ripple.com/files/ripple_consensus_whitepaper.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ripple.com/files/ripple_consensus
                            <br />
                            _whitepaper.pdf
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://twitter.com/ripple"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            twitter.com/ripple
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://ripple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ripple.com/
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={{ marginTop: '40px', paddingBottom: '40px' }}
                className="row"
              >
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <div id="chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'xtz') {
      return (
        <div className={styles.wrapper}>
          <div className="container">
            <CenterTitle
              title="How to create a Tezos XTZ wallet?"
              className={styles.title}
            />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">{texts[this.props.currency]}</div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div className="container">
              <CenterTitle
                title="How does Tezos On-Chain Governance work"
                className={styles.title}
              />
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <p className={styles.textSimple}>
                    As we have already mentioned before, Tezos enables upgrades
                    of the protocol though on-chain governance system.
                    Basically, instead of the radical changes (also known as
                    hard forks), Tezos manages to improve the network step by
                    step. The users vote for the best proposal suggested and a
                    taken parameter of the protocol is changed by the network.
                    The mechanism of this system is really quite simple: <br />
                    For the network to upgrade, the developers submit numerous
                    proposals. Tezos holders, on the other hand, vote for the
                    best one. When the decision is made, developers start
                    implementing the changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <CenterTitle title="Tezos features" className={styles.title} />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">
                <p className={styles.textXrp}>
                  <b> 1. Smart Contracts</b>
                  <br />
                  Tezos is quite similar to Ethereum from the point of the
                  blockchain use cases. The network is dedicated to the Smart
                  Contracts and Decentralised Applications.
                  <br />
                  <b>2. On-Chain Governance</b>
                  <br />
                  Tezos users (stakeholders) can vote for the blockchain
                  improvements. The votes can be cast every three months.
                  <br />
                  <b>3. Baking</b>
                  <br />
                  Baking is a special feature of Tezos. We have already covered
                  the basics of it in our previous{' '}
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    blog post.
                  </a>{' '}
                  Tezos bakers are the people who provide the stability of the
                  network and operate transactions. <br />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div className="container">
              <CenterTitle
                title="Delegated Proof-of-Stake"
                className={styles.title}
              />
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <p className={styles.textSimple}>
                    To achieve this consensus and make a decision, Tezos suggest
                    the Delegated Proof-of-Stake algorithm. Besides not having
                    to go through the hard fork process, Tezos DPoS is also
                    environmentally-friendly. Let’s take Bitcoin as an example.
                    <br />
                    To mine Bitcoin (Proof-of-Work system), a massive amount of
                    electricity is needed. Proof of Stake is much more
                    economical at this point – each cryptocurrency holder can
                    take part in the mining process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <CenterTitle
              title="Tezos ICO process and further troubles"
              className={styles.title}
            />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">
                <p className={styles.textXrp}>
                  Tezos drew lots of attention with its ICO (Initial Coin
                  Offering). After the massive success of this campaign, things
                  started to complicate for the company. A massive dispute took
                  place on the very hights – between the founder of Tezos and
                  the owner of Tezos intellectual property rights. As a result,
                  the launch of the platform was majorly delayed. Then, the
                  legal troubles took place. The users of the network answered
                  with a series of lawsuits against the company. A class action
                  lawsuit followed. <br />
                  Finally, by February 2018, the investors saw a ray of light in
                  this kingdom of legal darkness. Two board members of the Tezos
                  Foundation stepped down and were replaced by the Tezos
                  community members.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div className="container">
              <CenterTitle
                title="Tezos XTZ cryptocurrency"
                className={styles.title}
              />
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <p className={styles.textXrp}>
                    Tezos XTZ is somewhat of a newcomer to the cryptocurrency
                    market, but the coin has already got itself quite a strong
                    position on the top of the list. The mainnet for XTZ
                    launched in 2018, after a long and tedious post-ICO process.
                    Tezos indeed got a second chance, which rarely happens in
                    the crypto world. The hopes of users and investors paid off,
                    as now Tezos enjoys being in the top-crypto list by market
                    cap.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-1">&nbsp; </div>
                <div className="col-xs-10">
                  <table className={styles.tableInfo}>
                    <thead>
                      <tr>
                        <td>Market Cap</td>
                        <td>Circulating Supply</td>
                        <td>Total Supply</td>
                        <td>Website</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$252,932,006 USD</td>
                        <td>607,489,041 XTZ</td>
                        <td>763,306,930 XTZ</td>
                        <td>
                          <a
                            href="https://tezos.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            tezos.com/
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={{ marginTop: '20px', paddingBottom: '40px' }}
                className="row"
              >
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <div id="chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'xmr') {
      return (
        <div className={styles.wrapper}>
          <div className="container">
            <CenterTitle title="What is Monero XMR?" className={styles.title} />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">{texts[this.props.currency]}</div>
            </div>
          </div>
          <div className="container" style={{ marginTop: '-20px' }}>
            <CenterTitle title="Monero Team" className={styles.title} />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">
                <p className={styles.textSimple}>
                  As the team section of the Monero Official
                  <a
                    href="https://www.getmonero.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Website
                  </a>
                  states, the core team includes:
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/fluffypony"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Riccardo Spagni “Fluffy pony”
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.reddit.com/user/ArticMine"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Francisco “ArticMine” Cabanas
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.reddit.com/user/smooth_xmr"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        smooth
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.reddit.com/user/othexmr"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        othe
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.reddit.com/user/NoodleDoodle_xmr"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        NoodleDoodle
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.reddit.com/user/cloud10again"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        luigi1111
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.reddit.com/user/binaryFate"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        binaryFate
                      </a>
                    </li>
                  </ul>
                  Monero’s main focus is privacy, so it is not surprising that
                  so many developers and contributors have decided to stay
                  anonymous.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div className="container">
              <CenterTitle
                title="Monero XMR cryptocurrency"
                className={styles.title}
              />
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div
                  className="col-xs-10"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <img
                    src={XmrCrypImage}
                    alt="Monero cryptocurrency"
                    style={{
                      width: '307px',
                      height: '307px',
                      marginBottom: '25px',
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <p className={styles.textXrp}>
                    Monero was originally named BitMonero. Within the next week,
                    the name was changed to the one that we know now.
                    <p>
                      Unlike many other cryptocurrencies, Monero is fungible.
                      Basically, fungibility refers to the characteristic of
                      equal units of currency being equal regardless of the
                      source, usage, owner and what not. Every Monero coin is
                      equal to another Monero coin, no matter where it comes
                      from. Monero mining is only possible with the use of CPUs
                      and GPUs – this also makes the coin more decentralised.
                    </p>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-1">&nbsp; </div>
                <div className="col-xs-10" />
              </div>
              <div className="row">
                <div className="col-xs-1">&nbsp; </div>
                <div className="col-xs-10">
                  <table className={styles.tableInfo}>
                    <thead>
                      <tr>
                        <td>Ticker</td>
                        <td>Genesis Date</td>
                        <td>All-Time High</td>
                        <td>Website</td>
                        <td>Twitter</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XMR</td>
                        <td>April 18, 2014</td>
                        <td>$542.33</td>
                        <td>
                          <a
                            href="https://www.getmonero.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            www.getmonero.org/
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://twitter.com/monero"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            twitter.com/monero
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={{ marginTop: '20px', paddingBottom: '40px' }}
                className="row"
              >
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <div id="chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'etc') {
      return (
        <div className={styles.wrapper}>
          <div className="container">
            <CenterTitle
              title="What is Ethereum Classic (ETC)?"
              className={styles.title}
            />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">{texts[this.props.currency]}</div>
            </div>
          </div>

          <div className="container" style={{ marginTop: '-40px' }}>
            <CenterTitle
              title="Ethereum Classic vs. Ethereum (ETC vs. ETH)"
              className={styles.title}
            />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">
                <p style={{ marginTop: '-30px', paddingBottom: '10px' }}>
                  <p>
                    Ethereum project is definitely quite similar to ETC, but
                    there are some key differences between these two crypto
                    giants. First of all, we should say that it is Ethereum, not
                    ETC functioning on the new blockchain.
                  </p>
                  <p>
                    So, ETC is actually the original Ethereum. ETH runs on the
                    same protocol as ETH but has different functions and
                    community. Ethereum is more of a software development
                    company that is focused on growing and expanding its
                    blockchain-based ecosystem. Ethereum Classic, on the other
                    hand, has value due to the trading market activity.{' '}
                  </p>
                  <p>
                    Surely it can be added that both ETC and ETH are noteworthy
                    projects. However, it is hard to skip the fact that power is
                    currently on the ETH side with the insane Ethereum market
                    cap.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div className="container">
              <CenterTitle
                title="Ethereum Classic (ETC) Cryptocurrency "
                className={styles.title}
              />
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div
                  className="col-xs-10"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <img
                    src={EtcCrypImage}
                    alt="Ethereum Classic Cryptocurrency"
                    style={{
                      width: '200px',
                      height: '300px',
                      marginBottom: '25px',
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <p className={styles.textXrp}>
                    Ethereum Classic network is fueled by its native
                    cryptocurrency – ETC or Classic Ether. When it comes to ETC
                    price predictions, there is really not that much we can tell
                    besides the fact that Ethereum Classic was growing quite
                    rapidly during its starting times. The holders can always
                    monitor the Ethereum Classic news and charts on our{' '}
                    <a
                      href="https://guarda.co/blog/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      blog
                    </a>{' '}
                    or wallet widgets.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-1">&nbsp; </div>
                <div className="col-xs-10" />
              </div>
              <div className="row">
                <div className="col-xs-1">&nbsp; </div>
                <div className="col-xs-10">
                  <table className={styles.tableInfo}>
                    <thead>
                      <tr>
                        <td>Total Supply</td>
                        <td>Genesis Date</td>
                        <td>Block Time</td>
                        <td>Website</td>
                        <td>GitHub</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>230 Million</td>
                        <td>July 30, 2015</td>
                        <td>12 Seconds</td>
                        <td>
                          <a
                            href="https://ethereumclassic.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ethereumclassic.org/
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://ethereumclassic.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ethereumclassic.github.io/
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={{ marginTop: '20px', paddingBottom: '40px' }}
                className="row"
              >
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <div id="chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'btc') {
      return (
        <div className={styles.wrapper}>
          <div className="container">
            <CenterTitle
              title="What is Bitcoin BTC?"
              className={styles.title}
            />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">{texts[this.props.currency]}</div>
            </div>
          </div>

          <div className="container" style={{ marginTop: '-20px' }}>
            <CenterTitle
              title="What are the features of Bitcoin?"
              className={styles.title}
            />
            <div className="row" style={{ marginTop: '-20px' }}>
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">
                <p className={styles.textSimple}>
                  Bitcoin can be used for purchases, just like any other digital
                  currency. However, there are major differences between
                  traditional money and the blockchain innovation.
                  <ol>
                    <li>
                      Decentralisation. The key feature of cryptocurrency,
                      decentralisation is being independent from authorities.
                      Bitcoin is maintained by volunteers and operated by an
                      open network. Those who use Bitcoin are not controlled by
                      institutions or governments.
                    </li>
                    <br />
                    <li>
                      Transparency. Another noteworthy point about Bitcoin
                      blockchain is its transparency and immutability.
                      Transactions in BTC are not only available for the public
                      to see, but also cannot be reversed. There is no central
                      power to tell anyone return the money. So, once a
                      transaction is placed on the Bitcoin blockchain, it is
                      there to stay.
                    </li>
                    <br />
                    <li>
                      Supposed anonymity. In the very beginning of
                      cryptocurrency there was quite a bit of speculation on
                      whether Bitcoin can be considered anonymous. The answer is
                      “no”. Bitcoin is pseudonymous – the users operate their
                      transactions in semi-anonymity. If you are making a BTC
                      transaction, there is no need to identify yourself (unlike
                      bank transfers, for instance). The user, however, can be
                      identified by their wallet address. Transactions, too, can
                      be tracked.
                    </li>
                    <br />
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.overlay}>
            <div className="container">
              <CenterTitle
                title="BTC cryptocurrency "
                className={styles.title}
              />
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <img
                    src={BtcCrypImage}
                    alt="Bitcoin cryptocurrency"
                    style={{
                      width: '100%',
                      height: 'auto',
                      marginBottom: '25px',
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <p className={styles.textXrp}>
                    BTC (a ticker for Bitcoin) has come a long way from its
                    start. First of all, Bitcoin is The Top cryptocurrency on
                    the popular crypto list. Also top by market cap. BTC being
                    superior is not only explained by the fact that it was the
                    first coin to ever appear, but with this crypto being widely
                    accepted, marketed and demanded. Other cryptocurrencies
                    still do not get as much attention as BTC does. Shops{' '}
                    <a
                      href="https://www.ccn.com/companies-that-accept-bitcoin"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      accept
                    </a>{' '}
                    Bitcoin, you can buy goods, exchange, trade, use Bitcoin
                    ATMs… The list is very far from complete. Bitocin price
                    history, too, is a sight to behold. From nothing to $20.000
                    at one point? Not bad, right. You can read Bitcoin price
                    predictions (available in abundance on the Internet) to find
                    out more on what experts think the future will bring to BTC
                    development.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-1">&nbsp;</div>
                <div className="col-xs-10">
                  <div id="chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ paddingBottom: '45px' }}>
            <CenterTitle title="Why use Bitcoin?" className={styles.title} />
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-10">
                <p>
                  The question of Bitcoin use being justified always pops up
                  when speaking of cryptocurrency. We have some answers for you
                  on this. See, in some cases, Bitcoin is still a much more
                  efficient and cheap way to transfer funds. Cryptocurrency is
                  often used as a means of international value transfers. When
                  bank transfers take days (or even weeks), Bitcoin can be
                  immediately delivered to the recipient. Of course, bank cards
                  work the same way. However, BTC does not have any limitations.
                  The government, too, will not ask you questions about
                  suspicious transactions or anything of this kind.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const currencyInfo = getCurrencyInfo(this.props.currency);
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <CenterTitle
            title={`What is ${currencyInfo.title}?`}
            className={styles.title}
          />

          <div className="row">
            <div className="col-xs-1">&nbsp;</div>
            <div className="col-xs-10">{texts[this.props.currency]}</div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-xs-1">&nbsp;</div>
            <div className="col-xs-10">
              <div id="chart" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
