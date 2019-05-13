import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getCurrencyInfo } from 'libs/currency-info';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
// import { NavLink } from 'components/global/link';
import styles from './styles.css';

export default class OpenSource extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currency === 'ltc') {
      return null;
    }
    // const currencyInfo = getCurrencyInfo(this.props.currency);
    return (
      <div className={styles.wrapper}>
        <div className={styles.line}>
          <span />
        </div>
        <CenterTitle title="Open Source Wallet" />
        <div className="container">
          <div className={styles.titleDescription}>
            For the real crypto enthusiasts – Guarda open source wallet.
          </div>
          <a
            href="https://github.com/guardaco/guarda-android-wallets/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get an app or build it yourself
          </a>
        </div>
      </div>
    );
  }
}
