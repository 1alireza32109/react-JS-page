/* eslint max-len: [1, 1000] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CenterTitle from 'components/specific/center-title';
import styles from './styles.css';

export default class HowToBuy extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currency !== 'ltc') {
      return null;
    }

    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <div className={styles.wrapperText}>
                <div className="row">
                  <CenterTitle title="How to buy Litecoin?" isLeft />
                </div>
                <p>
                  You can buy Litecoin on all major exchange services. As
                  Litecoin is a popular crypto coin, LTC purchases can be done
                  both if fiat and in other cryptocurrencies. Buying
                  cryptocurrency is not only possible on the separate exchange
                  services – but you can also purchase LTC right on{' '}
                  <a href="/buy">Guarda</a>.
                </p>
                <p>
                  For those willing to exchange LTC, we are offering the
                  possibility to do it in the comfort of your own crypto wallet.
                  Our exchange partners are here to provide the seamless crypto
                  swap experience, best rates and support. Exchange Litecoin
                  with ChangeNOW – a trusted cryptocurrency exchange service
                </p>
              </div>
            </div>
            <div className="col-xs-5 col-xs-offset-1">
              <iframe
                title="Changenow"
                width="478"
                height="280"
                src="https://changenow.io/embeds/exchange-widget/v1?amount=1&from=btc&link_id=12fb43f7cda33d&to=ltc"
                frameBorder="0"
                scrolling="no"
                style={{
                  border: 'solid 1px #f1f2fa',
                  borderRadius: '5px',
                  marginTop: 100,
                  overflow: 'hidden',
                }}
              >
                Cant load widget
              </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
