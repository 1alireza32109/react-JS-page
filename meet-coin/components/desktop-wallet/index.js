/* eslint max-len: [1, 1000] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
// import IconCurrency from 'components/global/icon-currency';
import StoreButtons from '../../../desktop/components/store-buttons';

// import { NavLink } from 'components/global/link';
// import texts from './texts';
import styles from './styles.css';
import XrpImage from './images/rpx.png';
import XtzImage from './images/xtz.png';
import XmrImage from './images/xmr.png';
import EtcImage from './images/etc.png';
import BtcImage from './images/btc.png';

export default class DesktopWallet extends Component {
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
              <CenterTitle title="Ripple XRP wallet" className={styles.title} />
              <div className="col-xs-6">
                <img
                  src={XrpImage}
                  alt="Ripple cryptocurrency wallet"
                  style={{ width: '100%', marginTop: 50 }}
                />
              </div>
              <div className="col-xs-6">
                <div className={styles.wrapperText}>
                  <p>
                    XRP is one of the most popular cryptocurrencies on the
                    current market. Hence, the users need to think of a secure
                    Ripple wallet to hold their coins in. Ripple XRP is
                    supported by all the major wallet providers, but it makes
                    the choice of the right wallet even more difficult for the
                    users – this is exactly where Guarda Ripple wallet steps in.
                    We offer the best Ripple wallet experience with the ability
                    to store Ripple on multiple platforms (Web, Desktop, Mobile
                    and Chrome Extension), exchange XRP right within the wallet
                    and buy Ripple with the use of bank cards of{' '}
                    <a href="#" target="_blank" rel="noreferrer noopener">
                      Guarda’s{' '}
                    </a>
                    website.
                  </p>
                  <StoreButtons />
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
              <CenterTitle title="Monero XMR wallet" className={styles.title} />
              <div className="col-xs-6">
                <img
                  src={XmrImage}
                  alt="Monero Wallet"
                  style={{ width: '100%', marginTop: 90 }}
                />
              </div>
              <div className="col-xs-6">
                <div className={styles.wrapperText}>
                  <p>
                    Special cryptocurrency needs special wallets to store it in.
                    This is possibly why{' '}
                    <a
                      href="https://www.getmonero.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Monero
                    </a>{' '}
                    cryptocurrency wallets mostly specialise on XMR alone. We at{' '}
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Guarda
                    </a>{' '}
                    have tackled this issue and created a multi-platform,
                    multi-currency wallet offering Monero support.{' '}
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Guarda
                    </a>{' '}
                    wallets offer secure XMR storage, fast transactions, speedy
                    exchanges and complete{' '}
                    <a
                      href="https://medium.com/guarda/%EF%B8%8Fcustodial-vs-non-custodial-wallet-s-%EF%B8%8F-benefits-of-light-wallets-87cf701054d1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      non-custodial
                    </a>{' '}
                    freedom for the users. You can also check our guide on how
                    to choose a Monero wallet to get more information and
                    criteria on the best XMR storage service provided by our
                    team.
                    <br />
                    <p>
                      <ul className={styles.listWallets}>
                        <li>
                          <a
                            href="https://guarda.co/web-wallet"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Web Monero Wallet
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://guarda.co/desktop"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Desktop Monero Wallet
                          </a>
                        </li>

                        <li>
                          {' '}
                          <a
                            href="https://guarda.co/guarda-extension"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            XMR Chrome Extension wallet
                          </a>
                        </li>

                        <li>
                          {' '}
                          <a
                            href="https://github.com/guardaco/guarda-android-wallets/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Open Source Monero Wallet
                          </a>
                        </li>
                      </ul>
                    </p>
                    <p className={styles.download}>Download wallet now: </p>
                    <StoreButtons />
                  </p>
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
              <CenterTitle title="Tezos XTZ wallet" className={styles.title} />
              <div className="col-xs-6">
                <img
                  src={XtzImage}
                  alt="best Tezos wallet"
                  style={{ width: '100%', marginTop: 50 }}
                />
              </div>
              <div className="col-xs-6">
                <div className={styles.wrapperText}>
                  <p>
                    Probably ,Tezos did not start on the right foot, but it did
                    not stop the development of this network. From the very
                    launch, Tezos started to get some serious attention from the
                    investors. And, of course, when we talk about investments,
                    we need to get the platform ready. This is exactly why we
                    will be looking deeper into Tezos wallets. Tezos in present
                    in the majority of cryptocurrency wallets and it makes the
                    choosing process difficult for some of the users. We hope to
                    solve the choice problem by offering our multi-currency,
                    multiplatform wallet. Guarda offers the best Tezos wallet
                    experience for various platforms and devices:
                    <br />
                    <ul>
                      <li>
                        {' '}
                        <a href="#" target="_blank" rel="noreferrer noopener">
                          Web Tezos Wallet
                        </a>
                      </li>

                      <li>
                        {' '}
                        <a href="#" target="_blank" rel="noreferrer noopener">
                          {' '}
                          Desktop Tezos Wallet
                        </a>
                      </li>

                      <li>
                        <a href="#" target="_blank" rel="noreferrer noopener">
                          {' '}
                          XTZ Mobile Wallet (for Android and iOS)
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer noopener">
                          {' '}
                          XTZ Chrome Extension wallet
                        </a>
                      </li>
                    </ul>
                  </p>

                  <StoreButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'etc') {
      return (
        <div className={styles.wraperEtc}>
          <div className="container">
            <div className="row">
              <CenterTitle
                title="Ethereum Classic Wallet"
                className={styles.title}
              />
              <div className="col-xs-6">
                <img
                  src={EtcImage}
                  alt="Ethereum Classic Wallet"
                  style={{ width: '90%', marginTop: 150 }}
                />
              </div>
              <div className="col-xs-6">
                <div className={styles.wrapperText}>
                  <p>
                    There are many crypto wallets offering Ethereum Classic
                    support. When the competition is so rough, the users often
                    have a hard time deciding upon a wallet they should use.
                    Guarda Wallet team came up with several criteria for
                    choosing the best Ethereum Classic wallet. First of all, you
                    should be sure of wallet security. We advise turning to
                    non-custodial ETC wallets. Being the only owner of your
                    private keys and not sharing your personal information with
                    any third-parties is very important in enhancing the safety
                    of your funds. All the versions of the Guarda wallet are
                    custody-free and protected with special encryption
                    mechanisms. It is our focus to keep your ETC safe! Secondly,
                    you should choose a wallet that gives you management
                    options. Guards wallets are available on multiple platforms,
                    support over{' '}
                    <a
                      href="https://guarda.co/supported-cryptocurrencies"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      40 blockchains and more than 10k tokens{' '}
                    </a>{' '}
                    (including Ethereum Classic tokens) and have various
                    features making your crypto life easier. Give it a try now!
                    <br />
                    <ul className={styles.listWallets}>
                      <li>
                        <a
                          href="https://guarda.co/web-wallet"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Ethereum Classic Web wallet
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://guarda.co/desktop"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Desktop Wallet for Ethereum Classic
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://guarda.co/mobile-wallet"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Ethereum Classic Mobile Wallet (iOS and Android)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://guarda.co/guarda-extension"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Chrome Extension Wallet for ETC
                        </a>
                      </li>
                    </ul>
                    <p className={styles.download}>Download wallet now: </p>
                    <StoreButtons />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'btc') {
      return (
        <div style={{ background: '#f1f2fa' }} className={styles.wraperEtc}>
          <div className="container">
            <div className="row">
              <CenterTitle title="Bitcoin Wallet" className={styles.title} />
              <div className="col-xs-6">
                <img
                  src={BtcImage}
                  alt="Ethereum Classic Wallet"
                  style={{ width: '85%', marginTop: 90 }}
                />
              </div>
              <div className="col-xs-6">
                <div className={styles.wrapperText}>
                  <p>
                    There are so many Bitcoin wallets on the market that it’s
                    not even worth it to try and count them. This is the main
                    problem. There are trustworthy services, but it is hard to
                    find them is a pile of luring advertisements.{' '}
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Guarda
                    </a>{' '}
                    wallet is here to help you out with making the most
                    important cryptocurrency holding decision – finding a secure
                    Bitcoin wallet. Our crypto wallets are custody-free,
                    multiplatform and multi-currency. Of course, all Guarda
                    versions support BTC. No matter which one of Guarda wallets
                    you turn to, you will get a functional, convenient and
                    user-friendly wallet for Bitcoin.
                    <br />
                    <ul className={styles.listWallets}>
                      <li>
                        <a
                          href="https://guarda.co/web-wallet"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Web Bitcoin Wallet
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://guarda.co/desktop"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Desktop Bitcoin Wallet
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://guarda.co/guarda-extension"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          BTC Chrome Extension wallet
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://guarda.co/mobile-wallet"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Mobile Bitcoin Wallet
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/guardaco/guarda-android-wallets/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Open Source BTC Wallet
                        </a>
                      </li>
                    </ul>
                    <p className={styles.download}>Download wallet now: </p>
                    <StoreButtons />
                  </p>
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
