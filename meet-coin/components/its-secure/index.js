/* eslint max-len: [1, 1000] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
import IconCurrency from 'components/global/icon-currency';
import SheildIcon from './icon-sheild.svg';
import StoreButtons from '../../../desktop/components/store-buttons';

// import { NavLink } from 'components/global/link';
import texts from './texts';
import styles from './styles.css';
import LtcImage from './images/ltc.png';


export default class ItsSecure extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currency === 'xrp' || this.props.currency === 'xtz' || this.props.currency === 'xmr' || this.props.currency === 'etc' || this.props.currency === 'btc') {
      return null;
    }
    return (
      <div className={styles.wrapper}>
        <div className="container">
          {this.props.currency === 'ltc' ? (
            <div className="row">
              <div className="col-xs-6">
                <img src={LtcImage} alt="best Litecoin wallet" style={{ width: '100%', marginTop: 50 }} />
              </div>
              <div className="col-xs-5 col-xs-offset-1">
                <div className={styles.wrapperText}>
                  <div className="row">
                    <CenterTitle title="Litecoin Wallet on Guarda" isLeft />
                  </div>
                  <p>
                    Before buying any cryptocurrency, it is necessary to find secure storage. Litecoin, along with <a href="/cryptocurrency-btc">Bitcoin</a> and <a href="/cryptocurrency-eth">Ethereum</a>, is one of the most widespread cryptocurrencies. Guarda offers cryptocurrency wallet on various platforms – Web, Desktop, Mobile and Chrome Extension. Guarda Litecoin wallet is a secure, <a href="https://medium.com/guarda/%EF%B8%8Fcustodial-vs-non-custodial-wallet-s-%EF%B8%8F-benefits-of-light-wallets-87cf701054d1" target="_blank" rel="noopener noreferrer">non-custodial</a> solution for cryptocurrency holders. Guarda supports a variety of crypto coins and tokens and the new currencies are added to the <a href="/supported-cryptocurrencies">list</a> on the usual basis.
                    The best Litecoin wallet provided by Guarda can help in storing, sending, receiving and exchanging LTC. Guarda wallet requires no registration or account creation to start using.
                    You can also read more on other popular LTC wallets in our blog <a href="https://guarda.co/blog/best-wallet-for-litecoin/">review</a> and <a href="https://medium.com/@guarda/set-up-a-litecoin-wallet-8dc05797c33b" target="_blank" rel="noopener noreferrer">Medium post</a>.
                  </p>
                  <p className={styles.center}>
                    Download wallet now:
                  </p>
                  <StoreButtons className={styles.buttons} />
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-xs-5">
                <div className={styles.wrapperIcon}>
                  <img alt={this.props.currency} src={SheildIcon} />
                  <IconCurrency currency={this.props.currency} className={styles.currencySheild} />
                </div>
              </div>
              <div className="col-xs-5 col-xs-offset-1">
                <div className={styles.wrapperText}>
                  <div className="row">
                    <CenterTitle title="Is It Secure?" isLeft />
                  </div>
                  {texts[this.props.currency]}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
