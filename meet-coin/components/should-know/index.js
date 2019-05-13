import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getCurrencyInfo } from 'libs/currency-info';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
// import { NavLink } from 'components/global/link';
import styles from './styles.css';
import texts from './texts';

export default class ShouldKnow extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const currencyInfo = getCurrencyInfo(this.props.currency);
    if (this.props.currency === 'ltc') {
      return (
        <div className={styles.wrapper}>
          <div className="container">
            <CenterTitle title="Litecoin Basics" />
            <div className="row">
              <div className="col-xs-12">
                <ul>{texts[this.props.currency]}</ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.currency === 'xrp') {
      return (
        <div className={styles.wrapper}>
          <div className="container">
            <CenterTitle title="Ripple Facts" />
            <div className="row">
              <div className="col-xs-12">
                <ul>{texts[this.props.currency]}</ul>
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
            <CenterTitle title="Tezos Facts" />
            <div className="row">
              <div className="col-xs-12">
                <ul>{texts[this.props.currency]}</ul>
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
            <CenterTitle title="Facts about Monero" />
            <div className="row">
              <div className="col-xs-12">
                <ul>{texts[this.props.currency]}</ul>
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
            <CenterTitle title="Ethereum Classic (ETC) Facts" />
            <div className="row">
              <div className="col-xs-12">
                <ul>{texts[this.props.currency]}</ul>
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
            <CenterTitle title="Bitcoin Facts:" />
            <div className="row" style={{ marginTop: '-40px' }}>
              <div className="col-xs-12">
                <ul>{texts[this.props.currency]}</ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <CenterTitle title="You should know" />
          <div className="row">
            <div className="col-xs-12">
              <ul>{texts[this.props.currency]}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
