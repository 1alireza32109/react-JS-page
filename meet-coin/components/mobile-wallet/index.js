/* eslint max-len: [1, 500] */
import React from 'react';
// import cn from 'classnames';
import CenterTitle from 'components/specific/center-title';
import MobileLinks from '../../../multi-wallet/components/links';
import styles from './styles.css';
import LtcImage from './images/ltc.png';
import XrpImage from './images/xrp.png';
import TzxImage from './images/tzx.png';
import EtcImage from './images/etc.png';
import BtcImage from './images/btc.png';
// eslint-disable-next-line
export default ({ currency }) => {
  if (currency === 'ltc') {
    return (
      <div className="container">
        <CenterTitle title="Litecoin Mobile Wallet" />
        <div className="row">
          <div className="col-xs-7">
            <p>
              Mobile cryptocurrency wallets are a hot addition to the crypto
              market. Cryptocurrency apps make the daily coin management much
              easier for the users. Android and iOS Litecoin wallets are present
              in abundance, so the choice of the right one can be a little
              complicated. A trustworthy mobile crypto wallet needs to offer a
              secure private key encryption, easy backup management and, in the
              best of cases, possibility of multiple device management.
            </p>
            <p>
              We offer both multi-currency and single-currency wallets for LTC.
              <br />
              Your phone is everything you need to start managing LTC. Get
              Guarda Litecoin Wallet App now:
            </p>
            <br />
            <MobileLinks />

            <p>Download open-source single currency LTC wallet application:</p>
            <p>
              <a
                href="https://github.com/guardaco/guarda-android-wallets/blob/master/APKs/ltc-release.apk"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/guardaco/guarda-android-wallets/blob/master/APKs/ltc-release.apk
              </a>
            </p>

            <p>
              Learn more on the single-currency open source Litecoin Wallet on{' '}
              <a
                href="https://guarda.freshdesk.com/support/solutions/folders/36000185419"
                target="_blank"
                rel="noreferrer noopener"
              >
                Guarda Freshdesk
              </a>
            </p>
          </div>
          <div className="col-xs-5">
            <img
              src={LtcImage}
              alt="Litecoin wallet app"
              style={{ width: '65%' }}
            />
          </div>
        </div>
      </div>
    );
  }
  if (currency === 'xrp') {
    return (
      <div className="container">
        <div
          className="row"
          style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <div className="col-xs-5">
            <img
              className={styles.imgRpx}
              src={XrpImage}
              alt="Ripple Mobile wallet"
            />
            <MobileLinks />
          </div>
          <div className="col-xs-7">
            <div className={styles.xtzApp}>
              <CenterTitle
                className={styles.titleXtz}
                title="Ripple Mobile Wallet"
              />
              <p className={styles.textXtz}>
                For those who are willing to manage their cryptocurrency on the
                go, Guarda wallet offers the Mobile storing solutions. <br />
                Guarda XRP wallet app is multi-functional, multi-platform crypto
                storage that is a great option for the users preferring having
                their crypto coins and token always in reach. <br />
                The backup of the Mobile XRP wallet is encrypted stored securely
                on the device and the private key is always in your possession.
                Your keys = your crypto!
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (currency === 'xtz') {
    return (
      <div className={styles.wrapperXtz}>
        <div className="container">
          <div
            className="row"
            style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <div className="col-xs-5">
              <img
                className={styles.imgRpx}
                src={TzxImage}
                alt="Tezos Mobile wallet"
              />
              <MobileLinks />
            </div>
            <div className="col-xs-7">
              <div className={styles.xtzApp}>
                <CenterTitle
                  className={styles.titleXtz}
                  title="Tezos Mobile Wallet"
                />
                <p className={styles.textXtz}>
                  If your life is as fast-paced as ours, there is a chance you
                  might be in need of handy crypto storage that you can always
                  carry with you. Guarda offers Mobile cryptocurrency wallets
                  for more than 40 popular blockchains – including Tezos. <br />
                  Guarda Mobile Wallet for Tezos is a lightweight application
                  with the functionality of a traditional cryptocurrency wallet.
                  The backup of your wallet is encrypted on the device and your
                  private keys are always in your hands. Just as any other
                  Guarda wallet, the Mobile Multiwallet is non-custodial. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (currency === 'etc') {
    return (
      <div className={styles.wrapperXtz}>
        <div className="container">
          <div
            className="row"
            style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <div className="col-xs-5">
              <img
                className={styles.imgRpx}
                src={EtcImage}
                alt="Ethereum Classic Mobile Wallet "
              />
              <MobileLinks />
            </div>
            <div className="col-xs-7">
              <div className={styles.xtzApp}>
                <CenterTitle
                  className={styles.titleXtz}
                  title="ETC Mobile Wallet"
                />
                <p className={styles.textXtz}>
                  You can download Ethereum Classic wallet in{' '}
                  <a
                    href="https://itunes.apple.com/app/guarda-wallet/id1442083982?mt=8"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    AppStore
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.crypto.multiwallet"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GooglePlay
                  </a>
                  . Mobile crypto wallets are great for daily cryptocurrency
                  management. If you want to have access to your ETC on the run,
                  get our applications! Guarda mobile wallets are equally
                  functional to the Web and Desktop versions. All you need to do
                  to start managing your funds is to create a password and
                  download the wallet backup.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (currency === 'btc') {
    return (
      <div className={styles.wrapperXtz}>
        <div className="container">
          <div
            className="row"
            style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <div className="col-xs-5">
              <img
                className={styles.imgRpx}
                src={BtcImage}
                alt="Bitcoin Mobile Wallet"
              />
              <MobileLinks />
            </div>
            <div className="col-xs-7">
              <div className={styles.xtzApp}>
                <CenterTitle
                  className={styles.titleXtz}
                  title="BTC Mobile Wallet"
                />
                <p className={styles.textXtz}>
                  All the users prefer different kinds of cryptocurrency
                  wallets. If you are a person who values their time and does
                  not want to waste it for unnecessary crypto management steps,
                  you can get our{' '}
                  <a
                    href="https://guarda.co/mobile-wallet"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Mobile BTC wallet
                  </a>
                  . This application is designed to eliminate the need for
                  multiple crypto handling actions. Guarda Mobile Bitcoin
                  storage has everything you need – multiple coins, availability
                  across various platforms, secure private key encryption and,
                  of course, great wallet features.
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
};
