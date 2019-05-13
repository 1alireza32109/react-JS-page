import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'components/global/link';
import { formatCurrency, getCurrencyInfo } from 'libs/currency-info';
import Button from 'components/global/button';
import cn from 'classnames';
import IconCurrency from 'components/global/icon-currency';
import Poster from 'components/specific/poster';
import I18nText from 'libs/i18n/text';
// import icons from './icons';
import PosterImage from './poster-image.svg';
import styles from './styles.css';
import texts from './texts';

class PosterComponent extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  render() {
    const currencyInfo = getCurrencyInfo(this.props.currency);
    if (this.props.currency === 'xtz') {
      return (
        <Poster className={styles.poster}>
          <div className="col-xs-5">
            <h1>How to create a Tezos XTZ wallet?</h1>
            <div className={styles.blocks}>
              <p>
                Learn more on the best Tezos cryptocurrency wallet experience.
                Securely store and manage XTZ in a lightweight, non-custodial
                crypto wallet.
              </p>
              <NavLink to="/web-wallet">
                <Button color="white" className={styles.whiteButton}>
                  <span>
                    <I18nText id="GET_STARTED" />
                  </span>
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6 col-xs-offset-1">
            <div
              className={styles.images}
              style={{ backgroundImage: `url(${PosterImage})` }}
            >
              <IconCurrency
                currency={currencyInfo.ticker}
                className={cn(
                  styles.iconCurrency,
                  styles[currencyInfo.ticker] || '',
                )}
              />
            </div>
          </div>
        </Poster>
      );
    }
    if (this.props.currency === 'xrp') {
      return (
        <Poster className={styles.poster}>
          <div className="col-xs-5">
            <h1>Guide on Ripple cryptocurrency wallet</h1>
            <div className={styles.blocks}>
              <p>
                Easy Ripple XRP management on Guarda. Lightweight and secure
                Ripple wallet with the built-in exchange and purchase features.
              </p>
              <NavLink to="/web-wallet">
                <Button color="white" className={styles.whiteButton}>
                  <span>
                    <I18nText id="GET_STARTED" />
                  </span>
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6 col-xs-offset-1">
            <div
              className={styles.images}
              style={{ backgroundImage: `url(${PosterImage})` }}
            >
              <IconCurrency
                currency={currencyInfo.ticker}
                className={cn(
                  styles.iconCurrency,
                  styles[currencyInfo.ticker] || '',
                )}
              />
            </div>
          </div>
        </Poster>
      );
    }
    if (this.props.currency === 'xmr') {
      return (
        <Poster className={styles.poster}>
          <div className="col-xs-5">
            <h1>Everything you need to know about Monero XMR wallet</h1>
            <div className={styles.blocks}>
              <p>
                Store Monero in multi-currency, non-custodial wallet from
                Guarda. Best Monero wallet – secure and multiplatform
                cryptocurrency storage.
              </p>
              <NavLink to="/web-wallet">
                <Button color="white" className={styles.whiteButton}>
                  <span>
                    <I18nText id="GET_STARTED" />
                  </span>
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6 col-xs-offset-1">
            <div
              className={styles.images}
              style={{ backgroundImage: `url(${PosterImage})` }}
            >
              <IconCurrency
                currency={currencyInfo.ticker}
                className={cn(
                  styles.iconCurrency,
                  styles[currencyInfo.ticker] || '',
                )}
              />
            </div>
          </div>
        </Poster>
      );
    }
    if (this.props.currency === 'etc') {
      return (
        <Poster className={styles.poster}>
          <div className="col-xs-5">
            <h1>Ethereum Classic Wallet </h1>
            <div className={styles.blocks}>
              <p>
                Store, send, receive and exchange Ethereum Classic (ETC) in a
                secure non-custodial crypto wallet. Multi-currency,
                multi-platform ETC storing solutions from Guarda wallet.
              </p>
              <NavLink to="/web-wallet">
                <Button color="white" className={styles.whiteButton}>
                  <span>
                    <I18nText id="GET_STARTED" />
                  </span>
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6 col-xs-offset-1">
            <div
              className={styles.images}
              style={{ backgroundImage: `url(${PosterImage})` }}
            >
              <IconCurrency
                currency={currencyInfo.ticker}
                className={cn(
                  styles.iconCurrency,
                  styles[currencyInfo.ticker] || '',
                )}
              />
            </div>
          </div>
        </Poster>
      );
    }
    if (this.props.currency === 'btc') {
      return (
        <Poster className={styles.poster}>
          <div className="col-xs-5">
            <h1>A comprehensive guide on Bitcoin BTC</h1>
            <div className={styles.blocks}>
              <p>
                Get the best Bitcoin wallet on Guarda – non-custodial,
                multi-platform BTC storages with built-in exchanges and
                purchases.
              </p>
              <NavLink to="/web-wallet">
                <Button color="white" className={styles.whiteButton}>
                  <span>
                    <I18nText id="GET_STARTED" />
                  </span>
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6 col-xs-offset-1">
            <div
              className={styles.images}
              style={{ backgroundImage: `url(${PosterImage})` }}
            >
              <IconCurrency
                currency={currencyInfo.ticker}
                className={cn(
                  styles.iconCurrency,
                  styles[currencyInfo.ticker] || '',
                )}
              />
            </div>
          </div>
        </Poster>
      );
    }
    return (
      <Poster className={styles.poster}>
        <div className="col-xs-5">
          <h1>
            {texts[this.props.currency]
              ? texts[this.props.currency].desc
              : `Store, send, receive, exchange and buy ${formatCurrency(
                currencyInfo.ticker,
              )} with Guarda`}
          </h1>
          <NavLink to="/web-wallet">
            <Button color="white" className={styles.whiteButton}>
              <span>
                <I18nText id="GET_STARTED" />
              </span>
            </Button>
          </NavLink>
        </div>
        <div className="col-xs-6 col-xs-offset-1">
          <div
            className={styles.images}
            style={{ backgroundImage: `url(${PosterImage})` }}
          >
            <IconCurrency
              currency={currencyInfo.ticker}
              className={cn(
                styles.iconCurrency,
                styles[currencyInfo.ticker] || '',
              )}
            />
          </div>
        </div>
      </Poster>
    );
  }
}

export default PosterComponent;
