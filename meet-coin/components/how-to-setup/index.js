/* eslint max-len: [1, 500] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CenterTitle from 'components/specific/center-title';
import styles from './styles.css';

export default class HowToSetup extends Component {
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
          <CenterTitle title="How to set up Litecoin Wallet" />
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2 col-xs-offset-2">
              <ol>
                <li>
                  Go to Guarda’s Website https://guarda.co / and click Create
                  Wallet .
                </li>
                <li>
                  On the welcome screen, choose creating a new Web wallet.{' '}
                </li>
                <li>
                  Come up with a strong password for your wallet. The password
                  is an essential part of your wallet security — make sure to
                  save and never share it with anyone. We are a non-custodial
                  service and you are the only person in charge on the keys.
                </li>
                <li>
                  Your Litecoin wallet is being created – hold on a moment!
                </li>
                <li>
                  You will need to download your backup. Backup, as well as the
                  password, grants you access to the funds. Keep it safe and out
                  of the public eye!
                </li>
                <li>
                  You Litecoin wallet is ready to use! You can store, send,
                  receive and exchange LTC freely on Guarda.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
