/* eslint max-len: [1, 1000] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
// import IconCurrency from 'components/global/icon-currency';
// import StoreButtons from '../../../desktop/components/store-buttons';

// import { NavLink } from 'components/global/link';
// import texts from './texts';
import styles from './styles.css';
import XrpImage from './images/RipplesSreen.png';

export default class HowToBuyRenew extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currency === 'xrp') {
      return (
        <div className={styles.wrapper}>
          <div className="container">
            <div className="row">
              <CenterTitle
                title="How to buy Ripple XRP?"
                className={styles.title}
              />
              <div className="col-xs-12">
                <div className={styles.wrapperText}>
                  <p style={{ paddingBottom: '40px' }}>
                    Ripple is an unmineable token. 100 billion tokens were
                    created at the very beginning of the project. However, not
                    all of them are in circulation yet. Everyone has most
                    probably heard of the major Ripple price jump in 2017 – this
                    is pretty much where the hype has started. As for now,
                    Ripple XRP is present on the majority of the big exchange
                    platforms. For those willing to buy XRP, there are two ways
                    to do it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapperFilat}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <CenterTitle
                    title="How to buy Ripple with fiat?"
                    className={styles.title}
                  />

                  <img
                    className={styles.imgBuyRenew}
                    src={XrpImage}
                    alt="buy Ripple XRP"
                    style={{ width: '50%', marginTop: 20 }}
                  />
                  <div className={styles.wrapperText}>
                    <p>
                      Ripple XRP can be exchanged for fiat money on Guarda’s
                      website. To buy XRP for Dollars or Euro, you will need to
                      go to the Services section on Guarda and select Buy
                      Crypto. Everything that is needed for Ripple purchase on
                      Guarda is the card number and some basic information for
                      the Cex.io free of charge account.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.wrapper}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <CenterTitle
                      title=" How to exchange Ripple XRP?"
                      className={styles.title}
                    />
                    <div className={styles.wrapperText}>
                      <p>
                        You can buy Ripple with Bitcoin, Ethereum, Litecoin and
                        other cryptocurrencies right within your Guarda wallet.
                        For this, you will need to set up a wallet that can hold
                        the crypto you would like to exchange for Ripple. Once
                        you have a wallet, choose the Exchange function and
                        select the amount of cryptocurrency for the exchange.
                        Exchanging cryptocurrency within the wallet is a safer
                        option for the users and is performed faster.{' '}
                      </p>
                    </div>
                    <div
                      style={{ paddingBottom: '40px' }}
                      className={styles.iframeRenew}
                    >
                      <iframe
                        title="Changenow"
                        width="478"
                        height="280"
                        src="https://changenow.io/embeds/exchange-widget/v1?amount=1&from=btc&link_id=12fb43f7cda33d&to=xrp"
                        frameBorder="0"
                        scrolling="no"
                        style={{
                          border: 'solid 1px #f1f2fa',
                          borderRadius: '5px',
                          overflow: 'hidden',
                        }}
                      >
                        Cant load widget
                      </iframe>
                    </div>
                  </div>
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
            <div className="row">
              <div className="col-xs-6">
                <CenterTitle
                  style={{ width: '50%' }}
                  title="How to exchange Tezos?"
                  className={styles.title}
                />
                <div className={styles.wrapperTextXtz}>
                  <p>
                    Buying Tezos is quite easy. All you need to do is choose a
                    cryptocurrency you would like to exchange for XTZ and
                    confirm the transaction. However, how do you find a
                    trustworthy exchange service to perform a transaction on?
                    Say no more – you can get Tezos XTZ right within you Guarda
                    wallet. To make this happen, all you need to do is log in
                    into your wallet, choose the currency you would like to
                    exchange along with the amount you are willing to swap and
                    perform the exchange process through our partnering services
                    –{' '}
                    <a href="#" target="_blank" rel="noreferrer noopener">
                      ChangeNOW{' '}
                    </a>{' '}
                    and{' '}
                    <a href="#" target="_blank" rel="noreferrer noopener">
                      Coinswitch
                    </a>
                    .{' '}
                  </p>
                </div>
              </div>

              <div className="col-xs-6">
                <div
                  className={styles.iframeRenew}
                  style={{ marginTop: '80px' }}
                >
                  <iframe
                    title="Changenow"
                    width="478"
                    height="280"
                    src="https://changenow.io/embeds/exchange-widget/v1?amount=1&from=btc&link_id=12fb43f7cda33d&to=xtz"
                    frameBorder="0"
                    scrolling="no"
                    style={{
                      border: 'solid 1px #f1f2fa',
                      borderRadius: '5px',
                      marginTop: 100,
                      overflow: 'hidden',
                    }}
                  >
                    Cant load widget
                  </iframe>
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
            <div className="row">
              <CenterTitle
                title="How to buy Monero?"
                className={styles.title}
              />
              <div className="col-xs-12">
                <div className={styles.xmrOverlay}>
                  <p>
                    You can buy Monero on numerous cryptocurrency exchanges. XMR
                    is a popular cryptocurrency, so when choosing the exchange
                    service, pay attention to the reviews and rates of the taken
                    exchange. When it comes to getting Monero XMR is Guarda
                    wallets, you can exchange any cryptocurrency of your liking
                    though our partner services –{' '}
                    <a
                      href="https://changenow.io/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      ChangeNOW
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://coinswitch.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      CoinSwitch
                    </a>{' '}
                    . You can also check our exchange video below to find out
                    more about Guarda wallet exchanges.
                  </p>
                </div>
              </div>
              <div className="col-xs-12">
                <div className={styles.xmrOverlay}>
                  <iframe
                    title="How to buy Monero"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/kcfFUV3s-g8"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <div className={styles.xmrOverlay}>
                <iframe
                  title="Changenow"
                  width="478"
                  height="280"
                  src="https://changenow.io/embeds/exchange-widget/v1?amount=1&from=btc&link_id=12fb43f7cda33d&to=xmr"
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    border: 'solid 1px #f1f2fa',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                  }}
                >
                  Cant load widget
                </iframe>
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
            <div className="row">
              <CenterTitle
                title="How to buy Ethereum Classic?"
                className={styles.title}
              />
              <div className="col-xs-12" style={{ marginBottom: '-60px' }}>
                <div className={styles.wrapperText}>
                  <p style={{ width: '60%' }}>
                    After getting a Classic{' '}
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      wallet{' '}
                    </a>{' '}
                    , you can think of the possibilities of buying ETC. As this
                    crypto coin is listed on a vast majority of exchanging
                    services, all you will need to do is make a choice in
                    between the two usual cryptocurrency purchase options.
                  </p>
                  <br />

                  <p style={{ paddingBottom: '40px', width: '60%' }}>
                    If you are new to the cryptocurrency space, you might want
                    to buy ETC with fiat. There are many services you can use
                    for this, but the main point is choosing the platform you
                    trust. This is where{' '}
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Guarda
                    </a>{' '}
                    wallets step in. Cryptocurrency purchases for fiat can be
                    performed within all the version of our wallets. All you
                    need to do to buy Ethereum Classic on Guarda is set up the
                    wallet version of your choice and select Buy Crypto. You
                    will proceed to buy ETC with your bank card right away.
                  </p>
                </div>
              </div>
            </div>
            <CenterTitle
              title="Exchange Ethereum Classic"
              className={styles.title}
            />
            <div className="col-xs-12">
              <div className={styles.wrapperText}>
                <p style={{ width: '60%' }}>
                  Besides buying cryptocurrency for fiat, you can get ETC with
                  the crypto coins you already own. As we have already mentioned
                  before, ETC is a popular coin that has been embraced by the
                  majority of cryptocurrency exchange services. Our wallets,
                  too, grant users an opportunity to swap cryptocurrency
                  instantly and smoothly via the built-in exchange.
                  Cryptocurrency exchanges on Guarda are performed in a couple
                  of clicks – you need to choose a wallet you would like to use
                  for a swap and press Exchange (the button is present on the
                  list above). The exchanges are provided by our long-term
                  partners –{' '}
                  <a
                    href="https://changenow.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    ChangeNOW
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://coinswitch.co/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    CoinSwitch
                  </a>{' '}
                  .
                  <br />
                  <br />
                  Exchange Ethereum Classic now:
                </p>
              </div>
              <div
                style={{ paddingBottom: '40px' }}
                className={styles.iframeRenew}
              >
                <iframe
                  title="Changenow"
                  width="478"
                  height="280"
                  src="https://changenow.io/embeds/exchange-widget/v1?amount=1&from=btc&link_id=12fb43f7cda33d&to=etc"
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    border: 'solid 1px #f1f2fa',
                    borderRadius: '5px',
                    overflow: 'hidden',
                  }}
                >
                  Cant load widget
                </iframe>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'btc') {
      return (
        <div className={styles.wrapper} style={{ background: '#fff' }}>
          <div className="container">
            <div className="row">
              <CenterTitle
                title="How to buy Bitcoin?"
                className={styles.title}
              />
              <div className="col-xs-12">
                <div className={styles.wrapperText}>
                  <p style={{ marginBottom: '-40px', width: '60%' }}>
                    Bitcoin is the most popular cryptocurrency, so there is no
                    wonder you can buy BTC on any service. From big exchange
                    platforms to shady local websites, Bitcoin rules them all.
                    However, the more services appear, the greater your caution
                    will be. With significant chance of fraud or other type of
                    criminality involved, users should be extremely careful with
                    Bitcoin purchases. The main rule here would be – only use
                    trusted and verified services. This is where{' '}
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Guarda
                    </a>{' '}
                    steps in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapperFilat}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <CenterTitle
                    title="Buy Bitcoin for fiat"
                    className={styles.title}
                  />
                  <div className={styles.wrapperText}>
                    <p style={{ width: '60%', paddingBottom: '40px' }}>
                      You can{' '}
                      <a
                        href="https://guarda.co/buy"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        purchase
                      </a>{' '}
                      Bitcoin with bank cards right on Guarda. First of all,
                      fiat-to-crypto purchases are handy for the ones who are
                      new to the crypto space. However, even more experienced
                      users sometimes need to top up their Bitcoin wallets with
                      traditional money they have. Guarda Wallet only uses
                      trusted service providers and our fiat purchases are
                      licensed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.wrapper}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <CenterTitle
                      title="Exchange Bitcoin"
                      className={styles.title}
                    />
                    <div className={styles.wrapperText}>
                      <p style={{ width: '60%' }}>
                        If you already have some cryptocurrencies up your
                        sleeve, you might want to exchange them for BTC.
                        Fortunately, Guarda wallets are at your service with
                        these, too. All the versions of our wallets are equipped
                        with built-in exchanges, provided by our long-term
                        partners –{' '}
                        <a
                          href="https://changenow.io/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          ChangeNOW
                        </a>{' '}
                        and{' '}
                        <a
                          href="https://coinswitch.co/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          CoinSwitch
                        </a>
                        . We make sure to always have the best Bitcoin rates for
                        our users to enjoy seamless and speedy cryptocurrency
                        exchanges.
                      </p>
                    </div>
                    <div
                      style={{ paddingBottom: '40px' }}
                      className={styles.iframeRenew}
                    >
                      <iframe
                        title="Changenow"
                        width="478"
                        height="280"
                        src="https://changenow.io/embeds/exchange-widget/v1?amount=1&from=btc&link_id=12fb43f7cda33d&to=btc"
                        frameBorder="0"
                        scrolling="no"
                        style={{
                          border: 'solid 1px #f1f2fa',
                          borderRadius: '5px',
                          overflow: 'hidden',
                        }}
                      >
                        Cant load widget
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
