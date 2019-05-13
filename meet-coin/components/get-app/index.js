import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrencyInfo } from 'libs/currency-info';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
import Button from 'components/global/button';
import { NavLink } from 'components/global/link';
import styles from './styles.css';
// import IconAndroid from './poster-android-version.png';
import IconWebWallet from './poster-web-version.png';
import IconDescktop from './poster-desktop-version.png';

export default class Information extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const currencyInfo = getCurrencyInfo(this.props.currency);
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <CenterTitle title={`Get ${currencyInfo.title} Now`} />
          <div className="row">
            <div className="col-xs-6">
              <div className={styles.wrapperVersion}>
                <p>Web Version</p>
                <img src={IconWebWallet} alt="Guarda web wallet" />
                <a href="/app" target="_blank">
                  <Button className={styles.button}>Get wallet</Button>
                </a>
              </div>
            </div>
            {/* <div className="col-xs-4">
              <div className={styles.wrapperVersion}>
                <p>Android Version</p>
                <img src={IconAndroid} alt="Guarda android wallet" />
                <div className={styles.playStore} />
              </div>
            </div> */}
            <div className="col-xs-6">
              <div className={styles.wrapperVersion}>
                <p>Desktop Version</p>
                <img src={IconDescktop} alt="Guarda desktop wallet" />
                <NavLink to="/desktop">
                  <Button className={styles.button}>Download Wallet</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
