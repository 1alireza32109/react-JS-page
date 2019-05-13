/* eslint react/jsx-no-target-blank: [0] */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { getCurrencyInfo } from 'libs/currency-info';
// import I18nText from 'libs/i18n/text';
import Button from 'components/global/button';
import ChromeBadge from './chrome-badge.png';
// import { NavLink } from 'components/global/link';
import styles from './styles.css';


export default class Information extends Component {
  static propTypes = {
    // currency: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const currencyInfo = getCurrencyInfo(this.props.currency);
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="col-xs-10 col-xs-offset-2">
            <div className={styles.wrapperItems}>
              <img src={ChromeBadge} alt="Guarda chrome extension" />
              <div className={styles.blockInfo}>
                <h2>Chrome Extension</h2>
                <p>Try Guarda Chrome extension and <br /> interact with blockchain in browser!</p>
              </div>
              <div>
                <a href="https://chrome.google.com/webstore/detail/guarda/hpglfhgfnhbgpjdenjgmdgoeiappafln" target="_blank">
                  <Button color="light-blue">Download Extension</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
