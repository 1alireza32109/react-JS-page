/* eslint max-len: [1, 1000] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import I18nText from 'libs/i18n/text';
import CenterTitle from 'components/specific/center-title';
// import IconCurrency from 'components/global/icon-currency';
import StoreButtons from '../../../desktop/components/store-buttons';
// import { NavLink } from 'components/global/link';
// import texts from './texts';
import styles from './styles.css';

export default class HowToOpen extends Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currency !== 'xrp') {
      return null;
    }
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <CenterTitle
              title="How to Open a Ripple Wallet"
              className={styles.title}
            />

            <div className="col-xs-12">
              <div className={styles.wrapperText}>
                <p>
                  Guarda Ripple wallet provides the users with the easiness of
                  the lightweight wallet along with the enhanced security
                  levels. All you need to do to start using your new XRP wallet
                  is download (in case of Desktop or Mobile versions) or set up
                  the storage. After the installation, you can store, send,
                  receive and exchange Ripple XRP in a few clicks.
                  <br />
                  <br /> Download Guarda wallet:{' '}
                  <div className={styles.btnStoreXrp}>
                    {' '}
                    <StoreButtons />{' '}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
