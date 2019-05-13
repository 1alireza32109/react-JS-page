import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getCurrencyInfo } from 'libs/currency-info';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
// import { NavLink } from 'components/global/link';
import styles from './styles.css';
import IconMultiwallet from './icon-mobile.svg';
import IconSupport from './icon-support.svg';
import IconSecurity from './icon-security.svg';
import IconPurchaseCrypto from './icon-wallet.svg';
import IconMoney from './icon-money.svg';
import texts from './texts';

export default class WhyGuarda extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const currencyInfo = getCurrencyInfo(this.props.currency);
    return (
      <div className="container">
        <div className={styles.wrapper}>
          <CenterTitle
            title="Why Guarda"
          />
          <div className={styles.titleDescription}>
            {texts[this.props.currency]}
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <div className={styles.wrapperCircles}>
                <div className={styles.circleWrapper}>
                  <div className={styles.circle}>
                    <img src={IconMultiwallet} alt="Multiwallet" />
                  </div>
                  <div>Multiwallet</div>
                </div>
                <div className={styles.circleWrapper}>
                  <div className={styles.circle}>
                    <img src={IconSupport} alt="Support" />
                  </div>
                  <div>24/7 Support</div>
                </div>
                <div className={styles.circleWrapper}>
                  <div className={styles.circle}>
                    <img src={IconSecurity} alt="Security" />
                  </div>
                  <div>Security</div>
                </div>
                <div className={styles.circleWrapper}>
                  <div className={styles.circle}>
                    <img src={IconPurchaseCrypto} alt="Purchase Crypto" />
                  </div>
                  <div>Purchase Crypto</div>
                </div>
                <div className={styles.circleWrapper}>
                  <div className={styles.circle}>
                    <img src={IconMoney} alt="Multicurrency" />
                  </div>
                  <div>Multicurrency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
