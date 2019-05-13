/* eslint max-len: [1, 500] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CenterTitle from 'components/specific/center-title';
import styles from './styles.css';

export default class HowToSetupRenew extends Component {
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
              <div className="col-xs-12">
                <CenterTitle
                  title=" Set up a Ripple XRP wallet – Step by Step Guide"
                  className={styles.title}
                />

                <div style={{ top: '-25px' }} className={styles.textSetUp}>
                  <p style={{ marginBottom: '30px' }}>
                    To start managing your cryptocurrency on Guarda, you can set
                    up a Ripple XRP Web wallet first. Our Web wallet is a
                    user-friendly service perfect for daily XRP management.
                    Setting up your Ripple wallet on Guarda is be completed in
                    just a few easy steps. Check out our Youtube Guide on
                    creating a Web wallet:
                  </p>
                </div>
                <div className={styles.YouTubeIframe}>
                  <iframe
                    title="Set up a Ripple XRP wallet"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/-f2-NJi1Pgs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className={styles.textSetUp}>
                  <p>
                    1. On the main page of Guarda’s{' '}
                    <a href="#" target="_blank" rel="noreferrer noopener">
                      Website
                    </a>{' '}
                    , select Create Wallet On the welcome screen, proceed with
                    choosing to create a new wallet on Guarda.
                    <br />
                    <br />
                    2. Think of a secure password for your wallet – type it in
                    and repeat. Memorise the password or write it down. All the
                    passwords are better to be kept offline as a security
                    measure. Note: Guarda is a non-custodial wallet and we do
                    not store the private information of our users. You are the
                    only person in charge of your password.
                    <br />
                    <br />
                    3. Download your backup during the next step – the backup is
                    an essential part of your Ripple wallet, so make sure to
                    keep it safe and out of the public eye. Your Ripple wallet
                    is ready to use! All you need to do now is send or buy some
                    XRP!
                    <br />
                    <br />
                    4. For more information on Guarda XRP wallet, check out our
                    blog{' '}
                    <a href="#" target="_blank" rel="noreferrer noopener">
                      tutorial
                    </a>
                    <br />
                    <br />
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
        <div className={styles.wrapper} style={{ background: '#fff' }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <CenterTitle
                  title="Set up a Tezos Wallet"
                  className={styles.title}
                />
                <div style={{ top: '-25px' }} className={styles.textSetUp}>
                  <p style={{ marginBottom: '30px' }}>
                    You can start operating your Tezzies on{' '}
                    <a href="#" target="_blank" rel="noreferrer noopener">
                      Guarda
                    </a>{' '}
                    in a matter of a couple of clicks. For starters, you can get
                    our Web Tezos Wallet – perfect cryptocurrency storage for
                    day-to-day use. The Web wallet has all the functions that a
                    crypto hodler might need – security, fast transaction and
                    easy registration-free exchanges. In here we will describe
                    how to get the Web Tezos Wallet on Guarda:
                  </p>
                </div>
                <div className={styles.YouTubeIframe}>
                  <iframe
                    title="Set up a Tezos Wallet"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/-f2-NJi1Pgs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className={styles.textSetUpXtz}>
                  <p>
                    1. Go to the main page of Guarda’s Website and click Create
                    Wallet <br />
                    2. You will be redirected to the Welcome Screen. In here,
                    you will need to proceed with clicking Create a New Wallet.
                    <br />
                    3. The next step requires you to think a good password for
                    your wallet. Remember that your wallet password is the very
                    essential security feature that should be stored out of the
                    public eye. An important note here: Guarda Wallets are
                    custody-free, so we do not store the information of our
                    users – in case of a password or backup loss Guarda team
                    will not be able to restore it.
                    <br />
                    4. Now, you will need to download the backup of your Tezos
                    wallet – keep it safe and try not to store it online.
                    <br /> 5. Your Tezos wallet is all set up! You can now
                    store, send, receive and exchange XTZ on Guarda.
                    <br />
                    <br />
                    If you are interested in more information on Tezos wallets,
                    you can check our blog{' '}
                    <a href="#" target="_blank" rel="noreferrer noopener">
                      tutorial
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'xmr') {
      return (
        <div
          className={styles.wrapper}
          style={{ background: '#fff', marginBottom: '-30px' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <CenterTitle
                  title="Create a Monero Wallet"
                  className={styles.title}
                />
                <div style={{ top: '-25px' }} className={styles.textSetUp}>
                  <p style={{ marginBottom: '30px' }}>
                    Start managing XMR on Guarda in a few clicks. Guarda Wallets
                    are{' '}
                    <a
                      href="https://medium.com/guarda/%EF%B8%8Fcustodial-vs-non-custodial-wallet-s-%EF%B8%8F-benefits-of-light-wallets-87cf701054d1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      non-custodial
                    </a>
                    , lightweight Monero storages that require a minimal amount
                    of time to set. In this video, you can see how to set up a
                    Monero wallet step by step.
                  </p>
                </div>
                <div
                  className={styles.YouTubeIframe}
                  style={{ marginTop: '-20px' }}
                >
                  <iframe
                    title="Create a Monero Wallet"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/-f2-NJi1Pgs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div style={{ marginTop: '0' }} className={styles.textSetUpXtz}>
                  <p>
                    1. On the main page of Guarda’s{' '}
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Website
                    </a>
                    , select Create Wallet <br />
                    2. After being redirected to the welcome{' '}
                    <a
                      href="https://guarda.co/app/create"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      screen
                    </a>
                    , choose Create a New Wallet again
                    <br />
                    3. Make up a secure password for your wallet. You can check
                    our cryptocurrency password{' '}
                    <a
                      href="https://guarda.co/blog/cryptocurrency-wallet-password/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      guide{' '}
                    </a>{' '}
                    to help you make a great pass decision.
                    <br />
                    4. Download your backup. Backup of your Monero wallet is the
                    key to your XMR. Make sure to keep it safe – Guarda is a
                    custody-free service and will not be able to help you in
                    case of a backup loss.
                    <br /> 5. Your XMR wallet is active! Your new Guarda wallet
                    is here to store your Monero coins safely, enable speedy
                    transactions and help you exchange XMR instantly via our
                    built-in exchange service.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'etc') {
      return (
        <div className={styles.wrapperXmr} style={{ background: '#fff' }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <CenterTitle
                  title="How to create an Ethereum Classic Wallet"
                  className={styles.title}
                />
                <div style={{ top: '-25px' }} className={styles.textSetUp}>
                  <p style={{ marginBottom: '30px' }}>
                    Creating an Ethereum Classic Web wallet on Guarda is very
                    simple. Just as we promised, just 4 easy steps are needed to
                    start using your brand-new cryptocurrency storage. Here is a
                    setp-by-step tutprial on how to set up your first ETC
                    wallet.
                  </p>
                </div>
                <div
                  style={{ marginTop: '-20px' }}
                  className={styles.YouTubeIframe}
                >
                  <iframe
                    title="How to create an Ethereum Classic Wallet"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/-f2-NJi1Pgs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className={styles.textSetUpXtz}>
                  <p>
                    1. On the main page of Guarda’s
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Website
                    </a>
                    , select Create Wallet <br />
                    2. After being redirected to the welcome After being
                    redirected to the{' '}
                    <a
                      href="https://guarda.co/app/create"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Welcome Screen
                    </a>
                    , proceed with choosing to Create a New Wallet
                    <br />
                    3. Think of a strong password to protect your funds with.
                    Guarda Wallets are non-custodial, so make sure that your
                    passwords and backups are out of the public eye. You are the
                    only owner of your data!
                    <br />
                    4. Download your backup. We suggest storing it offline is a
                    place that you know is completely safe.
                    <br /> 5. You ETC wallet is now ready to rock! Store, send,
                    receive and exchange Ethereum Classic freely and securely.
                    <br />
                    <br />
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
        <div
          className={styles.wrapperXmr}
          style={{ background: '#fff', marginTop: '-100px' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <CenterTitle
                  title="Create a Bitcoin Wallet"
                  className={styles.title}
                />
                <div style={{ top: '-25px' }} className={styles.textSetUp}>
                  <p style={{ marginBottom: '30px' }}>
                    You can start managing your BTC on{' '}
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Guarda
                    </a>{' '}
                    in a few clicks. To make your cryptocurrency journey even
                    easier, we have made this step-by-step guide on how to
                    create a Bitcoin{' '}
                    <a
                      href="https://guarda.co/web-wallet"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Web wallet
                    </a>
                    :
                  </p>
                </div>
                <div
                  style={{ marginTop: '-20px' }}
                  className={styles.YouTubeIframe}
                >
                  <iframe
                    title="How to create an Ethereum Classic Wallet"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/-f2-NJi1Pgs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className={styles.textSetUpXtz}>
                  <p>
                    1. On the main page of Guarda’s{' '}
                    <a
                      href="https://guarda.co/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Website
                    </a>{' '}
                    , select Create Wallet <br />
                    2. After being redirected to the welcome{' '}
                    <a
                      href="https://guarda.co/app/create"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      screen
                    </a>
                    , choose Create a New Wallet once again
                    <br />
                    3. Think of a secure password for your BTC wallet. You can
                    check our cryptocurrency password{' '}
                    <a
                      href="https://guarda.co/blog/cryptocurrency-wallet-password/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      guide
                    </a>{' '}
                    to help you
                    <br />
                    4. Download your backup. Backup of your Bitcoin wallet is
                    the key to your funds. Make sure to keep it safe – Guarda is
                    a custody-free service and will not be able to help you in
                    case of a backup loss.
                    <br /> 5. Your walled has been created! Enjoy managing your
                    BTC in Guarda’s user-friendly interface.
                    <br />
                    <br />
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
